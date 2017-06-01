import React from 'react';
import IconButton from 'material-ui/IconButton';
import DehazeImage from 'material-ui/svg-icons/image/dehaze';
import Icon from './Icon';

class IconMore extends Icon {
	render() {
		return (
			<IconButton
				className="navbar-icon"
				style={this.props.style}
				onTouchTap={this.props.onTouchTap}
			>
				<DehazeImage color="white" />
			</IconButton>
		);
	}
}

export default IconMore;

