import React from 'react';
import { Layout, Cover } from '../Layout';
import { StudioList, Item } from '../../components/List';
import E from './E';


class Events extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			events: [
				{
					name: 'WEI 2015',
					cover: 'https://pbs.twimg.com/profile_images/839643754126417920/6trsFcTQ.jpg',
					date: '08/01/2015',
				},
				{
					name: 'Gala 2015',
					cover: 'https://cdn.pixabay.com/photo/2015/02/18/11/50/mountain-landscape-640617_960_720.jpg',
					date: '08/05/2016',
				},
			],
		};
	}

	render() {
		const cover = <Cover title="Events" />;
		const container = (
			<StudioList
				gutter={5}
				className="studio-list-space"
			>
				{this.state.events.map(event => <Item square key={event.name}><E event={event} /></Item>)}
			</StudioList>
		);

		return (
			<Layout cover={cover} container={container} />
		);
	}
}

export default Events;
