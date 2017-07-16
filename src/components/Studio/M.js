import React from 'react';
import FavoriteAction from 'material-ui/svg-icons/action/favorite';
import { Thumbnail } from '../Thumbnail';
import itemWrapper from '../../wrappers/itemWrapper/itemWrapper';


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
