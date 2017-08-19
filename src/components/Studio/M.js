import React from 'react';
import FavoriteAction from 'material-ui/svg-icons/action/favorite';
import { Thumbnail } from '../Thumbnail';
import itemWrapper from '../../wrappers/itemWrapper/itemWrapper';


const M = (props) =>
	<Thumbnail src={props.medium.getThumbnail ? props.medium.getThumbnail() : null}>
		<span>
			<FavoriteAction style={{ marginRight: 5 }} color="white" />
			<p>{props.medium.countLikes()}</p>
		</span>
	</Thumbnail>

export default itemWrapper(M);
