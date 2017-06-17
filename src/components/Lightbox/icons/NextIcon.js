import React from 'react';
import LightboxIcon from './LightboxIcon';
import Right from 'material-ui/svg-icons/navigation/chevron-right';

class NextIcon extends React.Component {

	render() {
		return (
			<LightboxIcon style={this.props.style} className={this.props.className}>
				<Right />
			</LightboxIcon>
		);
	}

}

export default NextIcon;
