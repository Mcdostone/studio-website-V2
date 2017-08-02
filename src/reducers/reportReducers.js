import { REPORTS_ADD } from '../actions/reportActions';
//import { Report } from '../core';
//import { getById } from '../utils';

const initialState = {}

export default function (state = initialState, action) {
	switch(action.type) {
		case REPORTS_ADD:
			return Object.assign({}, state, {});

		default:
			return state;
			// eslint-disable-next-line
	};
}
