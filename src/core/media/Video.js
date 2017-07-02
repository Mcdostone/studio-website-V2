import Medium from './Medium';

export default class Video extends Medium {

	constructor(src, from, likes = []) {
		super(src, 'video', from, likes);
	}

}
