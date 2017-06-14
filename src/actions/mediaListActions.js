export const SORT_LAST_ADDED = 1;
export const SORT_POPULARITY = 2;
export const SORT_LIKES = 3;
export const ADD_MEDIA = 'ADD_MEDIA';
export const SORT_BY = 'SORT_BY';
export const FILTER_BY = 'FILTER_BY';

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



