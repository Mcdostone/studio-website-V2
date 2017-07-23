import Timestampable from './Timestampable';

export default class Report extends Timestampable {

	constructor(id, reportBy, description, medium) {
		super();
		this.id = id;
		this.reportBy = reportBy;
		this.description = description;
		this.medium = medium;
	}

}
