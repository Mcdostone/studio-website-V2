export const ADD_MEDIA = 'ADD_MEDIA';
export const SHOW_MEDIUM = 'SHOW_MEDIUM';
export const LIGHTBOX_CLOSE = 'LIGHTBOX_CLOSE';
export const LIGHTBOX_NEXT = 'LIGHTBOX_NEXT';
export const LIGHTBOX_PREVIOUS = 'LIGHTBOX_PREVIOUS';


export const showMedium = (mediumData) => ({
    type: SHOW_MEDIUM,
		payload: mediumData,
});

export const nextMedium = (mediaList) => ({
	type: LIGHTBOX_NEXT,
	payload: mediaList,
});

export const previousMedium = (mediaList) => ({
	type: LIGHTBOX_PREVIOUS,
	payload: mediaList,
});

export const closeLightbox = () => ({
    type: LIGHTBOX_CLOSE,
});
