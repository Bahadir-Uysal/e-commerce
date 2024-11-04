import { getGravatarUrl } from "../../components/Gravatar";
import api from "../../apies/api"; // Import your Axios instance

export const setCurrentUser = (user) => {
  const gravatarUrl = user.email ? getGravatarUrl(user.email) : null;
  return {
    type: "SET_USER",
    payload: { ...user, gravatarUrl },
  };
};

export const clearUser = () => ({
  type: "SET_USER",
  payload: {}, // Clear user data
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const userData = response.data;

      // Add Gravatar URL to user data
      const userDataWithGravatar = {
        ...userData,
        gravatarUrl: getGravatarUrl(email),
        success: true,
      };

      dispatch(setCurrentUser(userDataWithGravatar));

      if (rememberMe) {
        localStorage.setItem("token", userData.token);
      }

      return userDataWithGravatar;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };
};
export const verifyToken = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Verifying token:', token);
      
      if (!token) {
        console.log('No token found');
        dispatch({ type: 'LOGOUT' });
        return false;
      }

      api.defaults.headers.common['Authorization'] = token;
      
      const response = await api.get('/verify');
      console.log('Verification response:', response.data);
      
      if (response.data) {
        const userData = {
          ...response.data,
          token
        };
        
        console.log('Dispatching user data:', userData);
        
        dispatch({
          type: 'SET_USER',
          payload: userData
        });

        // Log state after dispatch
        console.log('User data dispatched');

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          api.defaults.headers.common['Authorization'] = response.data.token;
        }
        
        return true;
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
      dispatch({ type: 'LOGOUT' });
      return false;
    }
  };
};