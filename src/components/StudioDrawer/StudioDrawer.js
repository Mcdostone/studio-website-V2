import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
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
				<Link to="/">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Studio
					</MenuItem>
				</Link>
				<Link to="/">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						About
					</MenuItem>
				</Link>
				<Link to="/">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Works
					</MenuItem>
				</Link>

				<Divider />

				<Link to="/media">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Media
					</MenuItem>
				</Link>
				<Link to="/events">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Events
					</MenuItem>
				</Link>
				<Link to="/types">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Types
					</MenuItem>
				</Link>

				<Divider />
				<Link to="/profile">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Your profile
					</MenuItem>
				</Link>
				<Link to="/sandbox">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Sandbox
					</MenuItem>
				</Link>

				<Link to="/logout">
					<MenuItem onTouchTap={this.props.onToggleDrawer}>
						Logout
					</MenuItem>
				</Link>

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
