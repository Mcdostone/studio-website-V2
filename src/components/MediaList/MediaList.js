import React from 'react';
import './MediaList.css';

class MediaList extends React.Component {
	render() {
		const list = [];
		for (let index = 1; index <= 9; index++) {
			list.push((<img className="media-item" src={`http://lorempicsum.com/futurama/255/200/${index}`} alt="" />));
		}

		return (
			<div className="media-list">
				{list}
			</div>
		);
	}
}

export default MediaList;
