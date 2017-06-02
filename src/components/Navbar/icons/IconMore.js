import React from 'react';
import DehazeImage from 'material-ui/svg-icons/image/dehaze';
import Icon from './Icon';

class IconMore extends Icon {
	render() {
		return (
			<Icon
				style={this.props.style}
				onTouchTap={this.props.onTouchTap}
			>
				<DehazeImage color="white" />
			</Icon>
		);
	}
}

export default IconMore;

