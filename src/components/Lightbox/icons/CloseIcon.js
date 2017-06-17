import React from 'react';
import LightboxIcon from './LightboxIcon';
import CloseNavigation from 'material-ui/svg-icons/navigation/close';

class CloseIcon extends React.Component {
	render() {
		return (
			<LightboxIcon
				size={this.props.size}
				disableTouchRipple
				onTouchTap={this.props.closeLightbox}
			>
				<CloseNavigation />
			</LightboxIcon>
		);
	}
}

export default CloseIcon;
