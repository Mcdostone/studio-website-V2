import { REPORTS_ADD } from '../actions/reportActions';
import { Report } from '../core';
import { buildUniqueDatasetById } from '../utils';

const initialState = {}

function buildReport(r) {
	const report = new Report(r.id, r.reportedBy, r.description, r.medium);
	report.createdAt = r.created_at;
	report.updatedAt = r.updated_at;
	return report;
}

export default function (state = initialState, action) {
	switch(action.type) {
		case REPORTS_ADD:
			const albums = buildUniqueDatasetById(action.payload, buildAlbum);
			return Object.assign({}, state, albums);

		default:
			return state;
			// eslint-disable-next-line
	};
}
