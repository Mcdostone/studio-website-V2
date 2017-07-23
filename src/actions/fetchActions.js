export const FETCH = 'FETCH';
export const FETCH_REFS = 'FETCH_REFS';
export const FETCH_ONE = 'FETCH_ONE';
export const OBJECT = 'OBJECT';
export const LIST = 'LIST';

export const fetchAll = (resource) => ({
    type: FETCH,
		payload: { resource, dataType: LIST}
});

export const fetchOne = (resource, id) => ({
    type: FETCH_ONE,
		payload: { resource, id}
});

export const fetchWithRefs = (resource, param, refs) => ({
    type: FETCH_REFS,
		payload: { resource, param, refs, dataType: OBJECT}
});
