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

export function buildUniqueDatasetById(dataset, build) {
	return dataset.reduce((newDataset, d, index) => {
		newDataset[d.id] = build(d);
		return newDataset;
	}, {});
}

export function getUniqueDatasetById(dataset) {
	return dataset.reduce((newDataset, d, index) => {
		newDataset[d.id] = d;
		return newDataset;
	}, {});
}
