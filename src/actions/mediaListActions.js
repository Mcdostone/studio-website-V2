export const SORT_LAST_ADDED = 1;
export const SORT_POPULARITY = 2;
export const SORT_LIKES = 3;
export const ADD_MEDIA = 'ADD_MEDIA';
export const SORT_BY = 'SORT_BY';
export const FILTER_BY = 'FILTER_BY';
export const MEDIA_LOADING = 'MEDIA_LOADING';
export const MEDIA_FETCH = 'MEDIA_FETCH';
export const MEDIA_FETCH_SUCCESS = 'MEDIA_FETCH_SUCCESS';
export const MEDIA_FETCH_FAILURE = 'MEDIA_FETCH_FAILURE';


export const sortBy = (typeSorting) => ({
    type: SORT_BY,
		payload: typeSorting,
});

export const filterBy = (typeFilter) => ({
    type: FILTER_BY,
		payload: typeFilter,
});

export const addMedia = (media) => ({
    type: ADD_MEDIA,
		payload: media,
});

export const loadMedia = () => ({
    type: MEDIA_LOADING,
});

export const fetchMedia = (index) => ({
    type: MEDIA_FETCH,
		payload: index,
});

export const fetchMediaSuccess = () => ({
    type: MEDIA_FETCH_SUCCESS,
});

export const fetchMediaFailure = () => ({
    type: MEDIA_FETCH_FAILURE,
});
