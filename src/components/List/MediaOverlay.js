import React from 'react';
import FavoriteAction from 'material-ui/svg-icons/action/favorite';

class MediaList extends React.Component {
	render() {
		return (
			<div className="media-overlay">
				<div className="media-overlay-infos">
					<FavoriteAction style={{ marginRight: 5 }} color="white" />
					24
				</div>
			</div>
		);
	}
}

export default MediaList;
