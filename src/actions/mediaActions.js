export const SORT_LAST_ADDED = 1;
export const SORT_POPULARITY = 2;
export const SORT_LIKES = 3;
export const MEDIA_ADD = 'MEDIA_ADD';
export const MEDIA_ADD_LIST = 'MEDIA_ADD_LIST';
export const MEDIA_FETCH = 'MEDIA_FETCH';
export const MEDIA_FETCH_FROM_GOOGLE_DRIVE = 'MEDIA_FETCH_FROM_GOOGLE_DRIVE';
export const MEDIA_FETCH_ONE = 'MEDIA_FETCH_ONE';
export const MEDIA_FETCH_ALL = 'MEDIA_FETCH_ALL';


export const addMedia = (media) => ({
    type: MEDIA_ADD,
		payload: media,
});

export const fetchMedia = (id) => ({
    type: MEDIA_FETCH,
		payload: id,
});

export const fetchOneMedium = (resource, id) => ({
		type: MEDIA_FETCH_ONE,
		payload: {resource, id},
})

export const fetchAllMedia = () =>  ({
    type: MEDIA_FETCH_ALL,
});
