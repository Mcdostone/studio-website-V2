export const REPORTS_ADD = 'REPORTS_ADD';
export const REPORTS_FETCH = 'REPORTS_FETCH';

export const addReport = (reports) => ({
		type: REPORTS_ADD,
		payload: reports,
});
