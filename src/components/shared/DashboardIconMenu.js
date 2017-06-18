import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz';
import { grey500, grey900 } from 'material-ui/styles/colors';


class DashboardIconMenu extends React.Component {

	render() {
		return (
			<IconMenu
				iconButtonElement={
					<IconButton>
					<MoreIcon
						color={this.props.dark ? grey900 : grey500 }
						hoverColor={this.props.dark ? grey500 : grey900 }
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

