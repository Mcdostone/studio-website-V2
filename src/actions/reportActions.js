export const REPORTS_ADD = 'REPORTS_ADD';
export const REPORTS_CREATE = 'REPORTS_CREATE';
export const REPORTS_FETCH = 'REPORTS_FETCH';


export const createReport = (report) => ({
	type: REPORTS_CREATE,
	payload: report,
});

export const addReport = (reports) => ({
	type: REPORTS_ADD,
	payload: reports,
});
