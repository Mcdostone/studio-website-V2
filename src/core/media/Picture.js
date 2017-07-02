import Medium from './Medium';

export default class Picture extends Medium {

	constructor(src, from, likes = []) {
		super(src, 'picture', from, likes);
	}

}
