export const COVER_FETCH = 'COVER_FETCH';
export const COVER_ADD = 'COVER_ADD';

export const fetchCover = (page) => ({
    type: COVER_FETCH,
		payload: page,
});

export const addCover = (page, url) => ({
    type: COVER_ADD,
		payload: {page, url},
});
