import { EVENTS_ADD } from '../actions/eventActions';
import { Event } from '../core';

const initialState = {}

function buildEvent(id, name, date, media = {}) {
	return new Event(id, name, date, Object.keys(media));
}

export default function (state = initialState, action) {
	switch(action.type) {
		case EVENTS_ADD:
			const events = action.payload.reduce((newEvents, e, index) => {
				newEvents[e.id] = buildEvent(e.id, e.name, e.date, e.media);
		    return newEvents;
			}, {});
			return Object.assign({}, state, events);

		default:
			return state;
			// eslint-disable-next-line
	};
}
