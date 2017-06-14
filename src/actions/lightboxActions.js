export const ADD_MEDIA = 'ADD_MEDIA';
export const SHOW_MEDIUM = 'SHOW_MEDIUM';
export const LIGHTBOX_OPEN = 'LIGHTBOX_OPEN';
export const LIGHTBOX_CLOSE = 'LIGHTBOX_CLOSE';


export const showMedium = (medium) => ({
    type: SHOW_MEDIUM,
		payload: medium,
});

export const openLightbox = (medium) => ({
    type: LIGHTBOX_OPEN,
		payload: medium,
});

export const closeLightbox = () => ({
    type: LIGHTBOX_CLOSE,
		payload: {},
});
