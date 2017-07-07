export const EVENTS_ADD = 'EVENTS_ADD';
export const EVENTS_FETCH = 'EVENTS_FETCH';

export const addEvents = (events) => ({
		type: EVENTS_ADD,
		payload: events,
});

export const fetchEvent = () => ({
    type: EVENTS_FETCH,
});