export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN = 'LOGIN';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const LOGOUT = 'LOGOUT';

export const requestLogin = () => ({
    type: REQUEST_LOGIN,
});

export const requestLogout = () => ({
    type: REQUEST_LOGOUT,
});

export const login = (user) => ({
    type: LOGIN,
		payload: user,
});

export const logout = () => ({ type: REQUEST_LOGOUT });
