import React from 'react';

class M extends React.Component {

	render() {
		const thumbnail = this.props.medium.getThumbnail();
		return (
			<div className="item-content">
				<img src={thumbnail} alt="" />
			</div>
		);
	}

}

export default M;
