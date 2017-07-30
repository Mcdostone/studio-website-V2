import pluralize from 'pluralize';
//const pluralize = require('pluralize');

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const formatResource = (resource) => {
	const plural = pluralize(resource);
	return {
		resource,
		plural,
		singular: pluralize.singular(resource),
		uppercasedPlural: plural.toUpperCase(),
	};
}

export const generateActions = (resources) => {
	let actions = {};
	resources.map( resource => {
		actions = Object.assign({}, actions,
			generateCreateAction(resource),
			generateUpdateAction(resource),
			generateAddAction(resource),
			generateDeleteAction(resource),
			generateFetchAction(resource),
			generateFetchAllAction(resource)
		);
	});

	return actions;
}

function generateAction(names, actionVerb, actionFunction) {
	const { singular, plurial, uppercasedPlural, resource } = names;
	const actionName = `${uppercasedPlural}_${actionVerb.toUpperCase()}`;
	const actions = {};
	actions[actionName] = actionName;
	actions[`${actionVerb.toLowerCase()}${capitalize(names.singular)}`] = actionFunction;
	return actions;
}



function generateCreateAction(resource) {
	const names = formatResource(resource);
	const verb = 'create';
	const func = (data) => {
		return {
			type: `${names.uppercasedPlural}_${verb.toUpperCase()}`,
			payload: {resource: names.plural, data}
		};
	};
	return generateAction(names, verb, func);
}

function generateUpdateAction(resource) {
	const names = formatResource(resource);
	const verb = 'update';
	const func = (data) => {
		return {
			type: `${names.uppercasedPlural}_${verb.toUpperCase()}`,
			payload: {resource: names.plural, data}
		};
	};
	return generateAction(names, verb, func);
}


function generateAddAction(resource) {
	const names = formatResource(resource);
	const verb = 'add';
	const func = (data) => {
		return {
			type: `${names.uppercasedPlural}_${verb.toUpperCase()}`,
			payload: data
		};
	};
	return generateAction(names, verb, func);
}


function generateDeleteAction(resource) {
	const names = formatResource(resource);
	const verb = 'delete';
	const func = (data) => {
		return {
			type: `${names.uppercasedPlural}_${verb.toUpperCase()}`,
			payload: data
		};
	};
	return generateAction(names, verb, func);
}

function generateFetchAction(resource) {
	const names = formatResource(resource);
	const verb = 'fetch';
	const func = (data) => {
		return {
			type: `${names.uppercasedPlural}_${verb.toUpperCase()}`,
			payload: {resource: names.resource, data},
		};
	};
	return generateAction(names, verb, func);
}

function generateFetchAllAction(resource) {
	const names = formatResource(resource);
	const verb = 'fetch_all';
	const func = () => {
		return {
			type: `${names.uppercasedPlural}_${verb.toUpperCase()}`,
			payload: {resource: names.resource}
		};
	};
}
