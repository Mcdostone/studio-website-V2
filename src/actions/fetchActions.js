export const FETCH_ALL = 'FETCH_ALL';
export const FETCH_ONE = 'FETCH_ONE';

export const fetchAll = (resource) => ({
	type: FETCH_ALL,
	payload: { resource }
});

export const fetchOne = (resource, id) => ({
	type: FETCH_ONE,
	payload: { resource, id }
});
