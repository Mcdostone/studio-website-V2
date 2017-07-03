export const EVENTS_ADD = 'EVENTS_ADD';


export const addEvents = (events) => ({
    type: EVENTS_ADD,
		payload: events,
});
