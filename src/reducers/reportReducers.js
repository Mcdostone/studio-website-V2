import { REPORTS_ADD, REPORTS_DELETE } from '../actions/reportActions';
import { getById } from '../utils';
import { buildReportFromFirebase } from '../factories';

const initialState = {}

export default function (state = initialState, action) {
	switch(action.type) {
		case REPORTS_ADD:
			return Object.assign({}, state, getById(buildReportFromFirebase(action.payload)));

		case REPORTS_DELETE:
			delete state[action.payload.id];
			return Object.assign({}, state);

		default:
			return state;
			// eslint-disable-next-line
	};
}
