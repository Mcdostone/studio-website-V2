import { Medium } from '../../core';

const mock = [
	{
		id: 'https://images.pexels.com/photos/126282/pexels-photo-126282.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
		type: 'picture',
		src: 'https://images.pexels.com/photos/126282/pexels-photo-126282.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
		likes: [],
	},
	{
		id: '	https://github.com/thepracticaldev/orly-full-res/blob/master/copyingandpasting-big.png?raw=true',
		type: 'picture',
		src: '	https://github.com/thepracticaldev/orly-full-res/blob/master/copyingandpasting-big.png?raw=true',
		likes: [],
	},
	{
		id: 'https://images.pexels.com/photos/88779/pexels-photo-88779.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
		type: 'picture',
		src: 'https://images.pexels.com/photos/88779/pexels-photo-88779.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
		likes: [12],
	},
	{
		id: 'http://www.letribunaldunet.fr/wp-content/uploads/2013/12/nervs.gif.pagespeed.ce_.I-kO3KSR7U.gif',
		type: 'picture',
		src: 'http://www.letribunaldunet.fr/wp-content/uploads/2013/12/nervs.gif.pagespeed.ce_.I-kO3KSR7U.gif',
		likes: [],
	},
	{
		id: 'https://image.ibb.co/nRxkqv/18644379_1732758443681227_824857558_n.png',
		type: 'photo',
		src: 'https://image.ibb.co/nRxkqv/18644379_1732758443681227_824857558_n.png',
		likes: [155],
	},
	{
		id: '3bYSEPd-__E',
		type: 'video',
		src: '3bYSEPd-__E',
		likes: [83],
	},
]

let res = {};
export default mock.map(el => res[el.id] =new Medium(el.id, el.src, el.type, 'web', el.likes));;
