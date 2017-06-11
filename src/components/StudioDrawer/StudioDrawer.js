import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class StudioDrawer extends React.Component {
	render() {
		return (
			<Drawer
				docked={false}
				width={200}
				open={this.props.open}
				onRequestChange={() => this.props.onToggleDrawer()}
			>
				<MenuItem onTouchTap={this.props.onToggleDrawer}>Menu Item</MenuItem>
				<MenuItem onTouchTap={this.props.onToggleDrawer}>Menu Item 2</MenuItem>
			</Drawer>
		);
	}
}

StudioDrawer.propTypes = {
	open: PropTypes.bool,
	onToggleDrawer: PropTypes.func.isRequired,
};

StudioDrawer.defaultProps = {
	open: false,
};

export default StudioDrawer;
