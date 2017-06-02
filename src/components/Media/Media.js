import React from 'react';
import Cover from '../Cover';
import Toolbar from '../Toolbar';
import './Media.css';
import MediaList from '../MediaList';

class Media extends React.Component {

	render() {
		return (
			<div className="media">
				<Cover title="Media" />
				<div className="media-container">
					<Toolbar />
					<MediaList />
				</div>
			</div>
		);
	}
}

export default Media;
