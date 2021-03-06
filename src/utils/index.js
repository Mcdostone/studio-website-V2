import moment from 'moment';


export function buildUniqueDatasetById(dataset, build) {
	return dataset.reduce((newDataset, d, index) => {
		newDataset[d.id] = build(d);
		return newDataset;
	}, {});
}

export function getById(object) {
	const result = {};
	if(object)
		result[object.id] = object;
	return result;
}

export function getUniqueDatasetById(dataset) {
	return dataset.reduce((newDataset, d, index) => {
		newDataset[d.id] = d;
		return newDataset;
	}, {});
}

export function getUniquePropertyFromDataset(property, dataset) {
	const res =  Object.keys(dataset).reduce((newDataset, d) => {
		if(dataset[d][property]) {
			const prop = dataset[d][property].toLowerCase();
			newDataset[prop] = true;
		}
		return newDataset;
	}, {});
	return Object.keys(res);
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date, format = 'DD/MM/YYYY HH:mm') {
	return date === null ? null : moment.utc(date).local().format(format);
}

export function getRandomProperty(obj) {
	const keys = Object.keys(obj);
	return keys[Math.floor(keys.length * Math.random())];
}
