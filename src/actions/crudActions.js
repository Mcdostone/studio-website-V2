export const CRUD_UPDATE = 'CRUD_UPDATE';
export const UPDATE = 'UPDATE';

export const update = (resource, data) => ({
    type: CRUD_UPDATE,
		payload: { resource, data }
});
