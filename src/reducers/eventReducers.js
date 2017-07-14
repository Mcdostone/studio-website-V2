import { EVENTS_ADD } from '../actions/eventActions';
import { Event } from '../core';
import { buildUniqueDatasetById } from '../utils';

const initialState = {}

function buildEvent(e) {
	return new Event(e.id, e.name, e.date, e.media);
}

export default function (state = initialState, action) {
	switch(action.type) {
		case EVENTS_ADD:
			const events = buildUniqueDatasetById(action.payload, buildEvent);
			return Object.assign({}, state, events);

		default:
			return state;
			// eslint-disable-next-line
	};
}
