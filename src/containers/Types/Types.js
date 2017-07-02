import React from 'react';
import { Cover, Layout } from '../Layout';
import { StudioList, Item } from '../../components/List';
import T from './T';

class Types extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			types: [
				{
					name: 'Photos',
					cover: 'https://lh3.googleusercontent.com/LvEBY7FdC6YHX9Nd0kckgy4wKICpom4ED15WxnyFtd93xwWEjPkaxVDtn_FJlJn0Tw=w300',
				},
				{
					name: 'Videos',
					cover: 'http://www.guidingtech.com/assets/postimages/2015/02/camera-roll.jpg',
				},
				{
					name: 'Posters',
					cover: 'https://www.xerox.com/sites/default/files/50-posters-48.jpg',
				}
			],
		};

	}
	render() {
		const cover = <Cover title="Types" />;
		const container = (
			<StudioList
				className="studio-list-space"
				gutter={5}
			>
				{this.state.types.map(type => <Item square  key={type.name}><T type={type} /></Item>)}
			</StudioList>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

export default Types;
