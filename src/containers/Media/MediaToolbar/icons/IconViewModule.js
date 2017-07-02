import React from 'react';
import { grey500, grey900 } from 'material-ui/styles/colors';
import ViewModuleAction from 'material-ui/svg-icons/action/view-module';
import Icon from './Icon';

class IconViewModule extends Icon {
	render() {
		const color = this.props.active ? grey900 : grey500;
		return (
			<Icon
				onTouchTap={this.props.onTouchTap}
				style={this.props.style}
			>
				<ViewModuleAction
					color={color}
					hoverColor={color}
				/>
			</Icon>
		);
	}
}

export default IconViewModule;

