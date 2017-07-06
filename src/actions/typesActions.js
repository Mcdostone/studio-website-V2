export const TYPES_ADD = 'TYPES_ADD';
export const TYPES_FETCH = 'TYPES_FETCH';

export const addTypes = (types) => ({
    type: TYPES_ADD,
		payload: types,
});

export const fetchTypes = () => ({
    type: TYPES_FETCH,
});
