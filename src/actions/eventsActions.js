export const FETCH_EVENTS = 'FETCH_EVENTS';
export const ADD_EVENTS = 'ADD_EVENTS';


export const fetchEvents = () => ({
    type: FETCH_EVENTS,
});

export const addEvents = (events) => ({
    type: ADD_EVENTS,
		payload: events,
});
