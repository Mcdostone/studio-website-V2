export const SORT_LAST_ADDED = 1;
export const SORT_POPULARITY = 2;
export const SORT_LIKES = 3;
export const SORT_BY = 'SORT_BY';

export const sortBy = (typeSorting) => ({
    type: SORT_BY,
		payload: typeSorting,
});
