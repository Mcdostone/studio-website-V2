import React from 'react';
import LightboxIcon from './LightboxIcon';
import AlertWarning from 'material-ui/svg-icons/alert/warning';

class NextIcon extends React.Component {
	render() {
		return (
			<LightboxIcon
				size={this.props.size}
				disableTouchRipple
				tooltip="report"
			>
				<AlertWarning />
			</LightboxIcon>
		);
	}
}

export default NextIcon;
