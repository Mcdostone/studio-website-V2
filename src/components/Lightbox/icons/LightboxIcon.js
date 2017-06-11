import React from 'react';
import IconButton from 'material-ui/IconButton';
import { grey700 } from 'material-ui/styles/colors';

class LightboxIcon extends React.Component {
	render() {
		const iconStyles = {
    	width: 36,
    	height: 36,
  	};

		const styles = {
			width: 72,
    	height: 72,
    	padding: 16,
			position: 'absolute',
		};

		return (
			<IconButton
				iconStyle={iconStyles}
				style={{...styles, ...this.props.style}}
				onTouchTap={this.props.onTouchTap}
			>
			  {React.cloneElement(this.props.children, { color: grey700, hoverColor: 'white' })}
			</IconButton>
		);
	}
}

export default LightboxIcon;
