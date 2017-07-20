export const CRUD_UPDATE = 'CRUD_UPDATE';
export const CRUD_CREATE = 'CRUD_CREATE';
export const CRUD_CREATE_WITH_COVER = 'CRUD_CREATE_REF';
export const CRUD_DELETE = 'CRUD_DELETE';
export const UPDATE = 'UPDATE';

export const create = (resource, data) => ({
    type: CRUD_CREATE,
		payload: { resource, data }
});

export const update = (resource, data) => ({
    type: CRUD_UPDATE,
		payload: { resource, data }
});

export const remove = (resource, id) => ({
    type: CRUD_DELETE,
		payload: { resource, id }
});
