import React from 'react';
import MediaOverlay from './MediaOverlay';

class M extends React.Component {

	render() {
		const styles = {
			background: `url(${this.props.src}) no-repeat`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}

		return (
			<div className="m media-item" style={styles}>
				<MediaOverlay />
			</div>
		);
	}
}

export default M;
