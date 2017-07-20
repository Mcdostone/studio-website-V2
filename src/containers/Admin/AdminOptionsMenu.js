import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz';
import { DeleteDialog } from '../../components/Dialogs';


class AdminOptionsMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
    	deleteDialog: false,
		};
		this.handleCloseDeleteDialog = this.handleCloseDeleteDialog.bind(this);
	}

	handleCloseDeleteDialog() {
		this.setState({deleteDialog: false});
	}

	render() {

		return (
			<div>
				<IconMenu
				style={{ zIndex: 1000, position: 'absolute', right: 100, bottom: 0 }}
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
					<MenuItem onTouchTap={() => this.setState({deleteDialog: true})} primaryText="Delete" />
				</IconMenu>
				<DeleteDialog {...this.props}
				open={this.state.deleteDialog}
				handleClose={this.handleCloseDeleteDialog}
				/>
			</div>

		);
	}
}

AdminOptionsMenu.propTypes = {
	id: PropTypes.string.isRequired,
	resource: PropTypes.string.isRequired,
}

export default AdminOptionsMenu;
