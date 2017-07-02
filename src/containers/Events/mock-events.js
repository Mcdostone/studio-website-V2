import { Event } from '../../core';

const data = [
	{
		id: '1',
		name: 'WEI 2015',
		cover: 'https://pbs.twimg.com/profile_images/839643754126417920/6trsFcTQ.jpg',
		date: '08/01/2015',
	},
	{
		id: '2',
		name: 'Gala 2015',
		cover: 'https://cdn.pixabay.com/photo/2015/02/18/11/50/mountain-landscape-640617_960_720.jpg',
		date: '08/05/2016',
	},
];

const events = data.map(e => new Event(e.id, e.name, e.date));

export default events;
