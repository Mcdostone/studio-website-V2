import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz';


class DashboardIconMenu extends React.Component {

	render() {
		return (
			<IconMenu
				style={this.props.style}
				iconButtonElement={
					<IconButton>
					<MoreIcon
						color={this.props.color ? this.props.color : 'white'}
						hoverColor={this.props.hoverColor ? this.props.hoverColor : 'white'}
					/>
					</IconButton>
				}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				targetOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<MenuItem primaryText="Dashboard admin" />
			</IconMenu>
		);
	}
}

export default DashboardIconMenu;

