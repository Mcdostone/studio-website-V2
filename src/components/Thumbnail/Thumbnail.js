import React from 'react';
import overlayWrapper from '../../wrappers/overlayWrapper/overlayWrapper';


class Thumbnail extends React.Component {

	getStyles() {
		return {
			objectFit: 'cover',
			float: 'left',
			width: '100%',
			height: '100%',
		}
	}

	render() {
		return (
			<img style={this.getStyles()} src={this.props.src} alt=""/>
		)
	}
}

export default overlayWrapper(Thumbnail);
