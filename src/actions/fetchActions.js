export const FETCH = 'FETCH';

export const fetch = (resource, param) => ({
    type: FETCH,
		payload: { resource, param }
});
