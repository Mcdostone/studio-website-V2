import React from 'react';
import Cover from '../Cover';
import Toolbar from '../Toolbar';
import MediaList from '../MediaList';

class Events extends React.Component {

	render() {
		return (
			<div className="media">
				<Cover title="Events" />
				<div className="media-container">
					<Toolbar />
					<MediaList />
				</div>
			</div>
		);
	}
}

export default Events;
