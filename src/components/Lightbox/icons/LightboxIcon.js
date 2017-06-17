import React from 'react';
import IconButton from 'material-ui/IconButton';
import { grey500 } from 'material-ui/styles/colors';

class LightboxIcon extends React.Component {
	render() {
		const size = this.props.size ? this.props.size : 36;
		const iconStyles = {
    	width: size,
    	height: size,
  	};

		const styles = {
			width: size * 2,
    	height: size * 2,
			padding: '0 8px',
		};

		return (
			<IconButton
				disableTouchRipple={this.props.disableTouchRipple}
				iconStyle={{...iconStyles, ...this.props.iconS}}
				style={{...styles, ...this.props.style}}
				onTouchTap={this.props.onTouchTap}
				tooltip={this.props.tooltip}
				className={this.props.className}
			>
			  {React.cloneElement(this.props.children, { color: grey500, hoverColor: 'white' })}
			</IconButton>
		);
	}
}

export default LightboxIcon;
