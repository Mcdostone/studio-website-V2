export const COVER_FETCH = 'COVER_FETCH';
export const COVER_ADD = 'COVER_ADD';
export const COVER_CREATE = 'COVER_CREATE';
/*export const COVER_SET_CURRENT = 'COVER_SET_CURRENT';
export const COVER_SET_TITLE = 'COVER_SET_TITLE';
export const COVER_RESET = 'COVER_RESET';
export const COVER_NEW = 'COVER_NEW';*/


export const fetchCover = (id) => ({
  type: COVER_FETCH,
	payload: id
});

export const addCover = (id, cover) => ({
    type: COVER_ADD,
		payload: {id, cover},
});

/*export const setCover = (id) => ({
    type: COVER_SET_CURRENT,
		payload: id,
});

export const setTitle = (title) => ({
    type: COVER_SET_TITLE,
		payload: title,
});

export const resetCover = () => ({
    type: COVER_RESET
});*/

export const createCover = (id, data) => ({
		type: COVER_CREATE,
		payload: {id, data}
});
