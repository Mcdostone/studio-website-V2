import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz';

const CoverMenu = (props) =>
	<IconMenu
		style={{ zIndex: 1000, position: 'absolute', right: 100, bottom: 0 }}
		iconButtonElement={
			<IconButton>
				<MoreIcon
				color={props.color || 'white'}
				hoverColor={props.hoverColor || 'white'}/>
			</IconButton>
		}
		anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		targetOrigin={{ horizontal: 'right', vertical: 'top' }}>
		{props.menuItems}
	</IconMenu>

CoverMenu.propTypes = {
	menuItems: PropTypes.array
};

export default CoverMenu;
