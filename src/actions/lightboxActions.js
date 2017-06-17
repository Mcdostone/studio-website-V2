export const ADD_MEDIA = 'ADD_MEDIA';
export const SHOW_MEDIUM = 'SHOW_MEDIUM';
export const LIGHTBOX_CLOSE = 'LIGHTBOX_CLOSE';
export const LIGHTBOX_NEXT = 'LIGHTBOX_NEXT';
export const LIGHTBOX_PREVIOUS = 'LIGHTBOX_PREVIOUS';


export const showMedium = (mediumData) => ({
    type: SHOW_MEDIUM,
		payload: mediumData,
});

export const nextMedium = () => ({
	type: LIGHTBOX_NEXT,
});

export const previousMedium = () => ({
	type: LIGHTBOX_PREVIOUS,
});

export const closeLightbox = () => ({
    type: LIGHTBOX_CLOSE,
});
