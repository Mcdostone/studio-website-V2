export const DRAWER_OPEN = 'DRAWER_OPEN';
export const DRAWER_CLOSE = 'DRAWER_CLOSE';
export const DRAWER_TOGGLE = 'DRAWER_TOGGLE';
export const ACTIVE_SQUARE_VIEW = 'ACTIVE_SQUARE_VIEW';
export const ACTIVE_MASONRY_VIEW = 'ACTIVE_MASONRY_VIEW';

export const openDrawer = () => ({
    type: DRAWER_OPEN,
		payload: true,
});

export const closeDrawer = () => ({
    type: DRAWER_CLOSE,
		payload: false,
});

export const toggleDrawer = () => ({ type: DRAWER_TOGGLE });

export const squareView = () => ({
    type: ACTIVE_SQUARE_VIEW,
		payload: true,
});

export const masonryView = () => ({
    type: ACTIVE_MASONRY_VIEW,
		payload: false,
});
