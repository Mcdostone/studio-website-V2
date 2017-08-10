import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz';


const DashboardIconMenu = (props) =>
	<IconMenu
		style={props.style}
		iconButtonElement={
			<IconButton>
			<MoreIcon
				color={props.color ? props.color : 'white'}
				hoverColor={props.hoverColor ? props.hoverColor : 'white'}
			/>
			</IconButton>
		}
		anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		targetOrigin={{ horizontal: 'right', vertical: 'top' }}
	>
		<MenuItem primaryText="Settings" onTouchTap={() => props.history.push(`/admin/${props.resource}/${props.data.id}`)} />
	</IconMenu>


DashboardIconMenu.propTypes = {
	resource: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
}

export default withRouter(DashboardIconMenu);

