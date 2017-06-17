import React from 'react';
import LightboxIcon from './LightboxIcon';
import Left from 'material-ui/svg-icons/navigation/chevron-left';

class PreviousIcon extends React.Component {

	render() {
		return (
			<LightboxIcon
				style={this.props.style}
				className={this.props.className}
				onTouchTap={this.props.onTouchTap}>
				<Left />
			</LightboxIcon>
		);
	}

}

export default PreviousIcon;
