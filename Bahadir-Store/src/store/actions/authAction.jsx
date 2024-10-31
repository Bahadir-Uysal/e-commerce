export const SET_AUTH = 'SET_AUTH';
export const LOGOUT = 'LOGOUT';

export const setAuth = (authData) => ({
    type: SET_AUTH,
    payload: authData
});

export const logout = () => ({
    type: LOGOUT
});