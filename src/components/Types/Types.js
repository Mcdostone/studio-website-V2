import React from 'react';
import Cover from '../Cover';
import Layout from '../Layout';

class Events extends React.Component {

	render() {
		const cover = <Cover title="Types" />;
		const container = (
			<div>
			</div>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

export default Events;
