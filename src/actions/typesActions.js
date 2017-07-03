export const FETCH_TYPES = 'FETCH_TYPES';
export const ADD_TYPES = 'ADD_TYPES';


export const fetchTypes = () => ({
    type: FETCH_TYPES,
});

export const addTypes = (types) => ({
    type: ADD_TYPES,
		payload: types,
});
