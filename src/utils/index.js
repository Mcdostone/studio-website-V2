export function getUniqueDataset(dataset, getterProperty) {
	let flags = {}
	return dataset.filter(entry => {
    if (flags[getterProperty(entry)]) {
        return false;
		}
    flags[getterProperty(entry)] = true;
    return true;
	});
}

export function getUniqueDatasetById(dataset) {
	return getUniqueDataset(dataset, d => d.id);
}

export function objectsToArray(objects) {
	return Object.keys(objects).map(key => objects[key]);
}
