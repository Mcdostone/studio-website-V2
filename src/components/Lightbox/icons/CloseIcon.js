import React from 'react';
import LightboxIcon from './LightboxIcon';
import CloseNavigation from 'material-ui/svg-icons/navigation/close';

class CloseIcon extends React.Component {
	render() {
		const styles = {
			right: 10,
			top: 10,
		};

		return (
			<LightboxIcon
				style={styles}
				onTouchTap={this.props.closeLightbox}
			>
				<CloseNavigation />
			</LightboxIcon>
		);
	}
}

export default CloseIcon;
