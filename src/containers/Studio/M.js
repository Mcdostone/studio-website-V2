import React from 'react';
import FavoriteAction from 'material-ui/svg-icons/action/favorite';
// import IconButton from 'material-ui/IconButton';
// import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Thumbnail from '../../components/Thumbnail';
import itemWrapper from '../../components/List/Item';

class M extends React.Component {

	render() {
		return (
			<Thumbnail src={this.props.medium.getThumbnail()}>
				<span>
					<FavoriteAction style={{ marginRight: 5 }} color="white" />
					<p>{this.props.medium.countLikes()}</p>
				</span>
			</Thumbnail>
		);
	}

}

export default itemWrapper(M);
