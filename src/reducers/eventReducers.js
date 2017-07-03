import { EVENTS_ADD } from '../actions/eventActions';
import { Event } from '../core';
import { getUniqueDatasetById } from '../utils';


const initialState = []

function buildEvent(id, name, date, cover = '') {
	return new Event(id, name, date, cover);
}

export default function (state = initialState, action) {
	switch(action.type) {
		case EVENTS_ADD:
			const newEvents = Object.keys(action.payload).map(id => buildEvent(id, action.payload[id].name, action.payload[id].date));
			return getUniqueDatasetById([...state, ...newEvents]);

		default:
			return state;
			// eslint-disable-next-line
	};
}
