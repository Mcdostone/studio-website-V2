export const FETCH = 'FETCH';
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
    type: FETCH,
		payload: { resource, param, dataType: OBJECT, refs}
});
