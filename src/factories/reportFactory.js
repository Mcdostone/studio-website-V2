import { Report } from '../core';

export const buildReportFromFirebase = (data) => {
	const report = new Report(data.id, data.reportedBy, data.description, data.medium);
	report.createdAt = data.created_at;
	report.updatedAt = data.updated_at;
	return report;
}
