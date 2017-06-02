import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ComponentGallery from 'react-component-gallery';
import M from './M';
import './MediaList.css';

class MediaList extends React.Component {
	render() {
		const images = [];
		for (let index = 1; index <= 9; index++) {
			images.push(`http://lorempicsum.com/futurama/400/400/${index}`);
		}


		return (
			<div className="media-list">
				{
					images.map(img => (
							<M src={img} />
					))

				}
			</div>
		);
	}
}

export default MediaList;
