import React from 'react';
import MediaOverlay from './MediaOverlay';

class M extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const classNames = this.props.square ? 'media-item square' : 'media-item';
		return (
			<div className={classNames}><img src={this.props.src} alt="" /><MediaOverlay /></div>
		);
	}
}

export default M;
