import React from 'react';
import IconButton from 'material-ui/IconButton';
import { grey500, grey900 } from 'material-ui/styles/colors';
import ViewModuleAction from 'material-ui/svg-icons/action/view-module';
import Icon from './Icon';


class IconViewModule extends Icon {
	render() {
		return (
			<IconButton
				disableTouchRipple={true}
				className="navbar-icon"
				style={this.props.style}
				onTouchTap={this.props.onTouchTap}
			>
				<ViewModuleAction
					color={grey500}
					hoverColor={grey900}
				/>
			</IconButton>
		);
	}
}

export default IconViewModule;

