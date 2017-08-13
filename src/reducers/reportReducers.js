import { REPORTS_ADD } from '../actions/reportActions';
import { getById } from '../utils';
import { buildReportFromFirebase } from '../factories';

const initialState = {}

export default function (state = initialState, action) {
	switch(action.type) {
		case REPORTS_ADD:
			return Object.assign({}, state, getById(buildReportFromFirebase(action.payload)));

		default:
			return state;
			// eslint-disable-next-line
	};
}
