import React from 'react';
import { grey500, grey900 } from 'material-ui/styles/colors';
import ViewQuilteAction from 'material-ui/svg-icons/action/view-quilt';
import Icon from './Icon';

class IconViewQuilt extends Icon {
	render() {
		const color = this.props.active ? grey900 : grey500;
		return (
			<Icon
				onTouchTap={this.props.onTouchTap}
				style={this.props.style}
			>
				<ViewQuilteAction
					color={color}
					hoverColor={color}
				/>
			</Icon>
		);
	}
}

export default IconViewQuilt;

