export const FETCH = 'FETCH';
export const FETCH_REFS = 'FETCH_REFS';
export const OBJECT = 'OBJECT';
export const LIST = 'LIST';

export const fetchAll = (resource, param) => ({
    type: FETCH,
		payload: { resource, param , dataType: LIST}
});

export const fetchOne = (resource, param) => ({
    type: FETCH,
		payload: { resource, param, dataType: OBJECT}
});

export const fetchWithRefs = (resource, param, refs) => ({
    type: FETCH_REFS,
		payload: { resource, param, refs, dataType: OBJECT}
});
