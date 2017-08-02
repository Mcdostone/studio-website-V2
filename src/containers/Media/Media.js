import React from 'react';
import { Layout } from '../Layout';
import Studio from '../../components/Studio';


class Media extends React.Component {

	render() {
		return (
			<Layout cover={this.props.cover} title={'media'}>
				<Studio media={this.props.dataSource} />
			</Layout>
		);
	}
}

export default Media;
