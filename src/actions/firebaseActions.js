export const USER_LOGIN = 'LOGIN';
export const USER_LOGOUT = 'LOGOUT';

export const userLogin = (user) => ({
    type: USER_LOGIN,
		payload: user,
});

export const userLogout = () => ({ type: USER_LOGOUT });
