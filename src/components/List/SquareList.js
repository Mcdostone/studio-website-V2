import React from 'react';
import M from './M';
import './SquareList.css';

class SquareList extends React.Component {
	render() {
		return (
			<div className="media-list">
				{
					this.props.media.map(img => (
						<M src={img} key={img} />
					))
				}
			</div>
		);
	}
}

export default SquareList;
