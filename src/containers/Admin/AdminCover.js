import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { Cover } from '../../components/Cover';
import CoverMenu from './CoverMenu';
import { DeleteDialog } from '../../components/Dialogs';



class AdminCover extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			deleteDialog: false
		};
	}

	render = () => {
		const items = [
			<MenuItem primaryText="Delete ?" key="1" onTouchTap={() => this.setState({deleteDialog: true})} />
		];
		return (
			<Cover {...this.props}>
				<CoverMenu menuItems={items} />
				<DeleteDialog
				{...this.props}
				handleClose={() => this.setState({deleteDialog: false})}
				open={this.state.deleteDialog} />
				{this.props.children}
			</Cover>
		);
	}

}

AdminCover.propTypes = {
	itemsMenu: PropTypes.array,
}

export default AdminCover;
