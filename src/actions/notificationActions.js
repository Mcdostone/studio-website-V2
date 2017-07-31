export const NOTIFICATIONS_SHOW = 'NOTIFICATIONS_SHOW';
export const NOTIFICATIONS_HIDE = 'NOTIFICATIONS_HIDE';

export const notify = (message, autoHideDuration= 4000) => ({
		type: NOTIFICATIONS_SHOW,
		payload: { message, autoHideDuration }
});


export const hide = () => ({
		type: NOTIFICATIONS_HIDE,
});
