export const COVER_FETCH = 'COVER_FETCH';
export const COVER_ADD = 'COVER_ADD';
export const COVER_SET_CURRENT = 'COVER_SET_CURRENT';

export const fetchCover = (id, erase = true) => ({
    type: COVER_FETCH,
		payload: {id, erase}
});

export const addCover = (id, url) => ({
    type: COVER_ADD,
		payload: {id, url},
});
