import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { Cover, CoverMenu } from 'components/Cover';
import { DeleteDialog } from '../../components/Dialogs';

class AdminCover extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			deleteDialog: false
		};
	}

	getMenuCover = () => {
		const items = [
			<MenuItem primaryText="Delete ?" key="1" onTouchTap={() => this.setState({deleteDialog: true})} />
		];
		if(this.props.creation === false || !this.props.creation)
			return (
				<div>
					<CoverMenu menuItems={items} />
					<DeleteDialog
					{...this.props}
					handleClose={() => this.setState({deleteDialog: false})}
					open={this.state.deleteDialog} />
				</div>
			);
		return null;
	}

	render = () =>
		<Cover {...this.props}>
			{this.getMenuCover()}
			{this.props.children}
		</Cover>
}

AdminCover.propTypes = {
	itemsMenu: PropTypes.array,
	creation: PropTypes.bool
}

export default AdminCover;
