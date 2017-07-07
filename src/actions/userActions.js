export const USERS_ADD = 'USERS_ADD';
export const USERS_FETCH = 'USERS_FETCH';

export const addUsers = (users) => ({
		type: USERS_ADD,
		payload: users,
});

export const fetchUser = () => ({
    type: USERS_FETCH,
});
