import { TYPES_ADD } from '../actions/typesActions';
import { Type } from '../core';
import { buildUniqueDatasetById } from '../utils';

const initialState = {}

function buildType(t) {
	return new Type(t.id, t.name, Object.keys(t.media));
}

export default function (state = initialState, action) {
	switch(action.type) {
		case TYPES_ADD:
			const types = buildUniqueDatasetById(action.payload, buildType);
			return Object.assign({}, state, types);

		default:
			return state;
			// eslint-disable-next-line
	};
}
