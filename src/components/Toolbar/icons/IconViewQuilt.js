import React from 'react';
import IconButton from 'material-ui/IconButton';
import { grey500, grey900 } from 'material-ui/styles/colors';
import ViewQuilteAction from 'material-ui/svg-icons/action/view-quilt';
import Icon from './Icon';


class IconViewQuilt extends Icon {
	render() {
		return (
			<IconButton
				disableTouchRipple={true}
				className="navbar-icon"
				style={this.props.style}
				onTouchTap={this.props.onTouchTap}
			>
				<ViewQuilteAction
					color={grey500}
					hoverColor={grey900}
				/>
			</IconButton>
		);
	}
}

export default IconViewQuilt;

