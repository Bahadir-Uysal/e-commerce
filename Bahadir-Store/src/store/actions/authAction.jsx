/* eslint-disable no-unused-vars */
import axios from 'axios';
import { toast } from 'react-toastify';
import md5 from 'md5';

// Action Types
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_CHECK_COMPLETE = 'AUTH_CHECK_COMPLETE';

// Action Creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

export const setAuthLoading = () => ({
  type: AUTH_LOADING,
});

export const setAuthError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});

export const setAuthCheckComplete = () => ({
  type: AUTH_CHECK_COMPLETE,
});

// Check auth status on app load
export const checkAuthStatusThunk = () => async (dispatch) => {
  dispatch(setAuthLoading());
  
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      dispatch(setAuthCheckComplete());
      return;
    }

    // Set default auth header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    // Verify token with backend
    const response = await axios.get('/user/me');
    
    // Add gravatar to user data
    const user = {
      ...response.data,
      gravatar: `https://www.gravatar.com/avatar/${md5(response.data.email)}`
    };
    
    dispatch(setUser(user));
  } catch (error) {
    console.error('Auth check failed:', error);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch(setAuthError('Session expired. Please login again.'));
  } finally {
    dispatch(setAuthCheckComplete());
  }
};

// Login Thunk
export const loginUserThunk = ({ email, password, rememberMe }) => async (dispatch) => {
  dispatch(setAuthLoading());
  
  try {
    const response = await axios.post('/login', { email, password });
    const { user, token } = response.data;

    // Store token in localStorage only if rememberMe is true
    if (rememberMe) {
      localStorage.setItem('token', token);
    } else {
      // For session-only storage
      sessionStorage.setItem('token', token);
    }
    
    // Set default auth header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Add gravatar to user data
    const userData = { 
      ...user, 
      gravatar: `https://www.gravatar.com/avatar/${md5(email)}?d=mp&s=200` // Added default image and size
    };

    // Dispatch user info
    dispatch(setUser(userData));

    toast.success('Login successful!');
    return { success: true, token };
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
    dispatch(setAuthError(errorMessage));
    toast.error(errorMessage);
    return { success: false, message: errorMessage };
  }
};

// Logout Thunk
export const logoutUserThunk = () => async (dispatch) => {
  dispatch(setAuthLoading());
  
  try {
    // Try to call logout endpoint
    try {
      await axios.post('/logout');
    } catch (err) {
      console.log('Logout API call failed, but continuing with local logout');
    }

    // Remove token from both storages
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    
    // Remove auth header
    delete axios.defaults.headers.common['Authorization'];

    // Dispatch logout action
    dispatch(logoutUser());
    
    toast.success('Logged out successfully');
    return { success: true };
  } catch (error) {
    const errorMessage = 'Logout failed';
    dispatch(setAuthError(errorMessage));
    toast.error(errorMessage);
    return { success: false, message: errorMessage };
  }
};