import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import { toggleDrawer } from '../../actions/uiActions'
import { authWrapper } from '../../wrappers';


class StudioDrawer extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.auth.authentificated !== nextProps.auth.authentificated ||
			this.props.open !== nextProps.open
		;
	}

	render() {
		let authentificated = undefined;
		if(this.props.auth.authentificated === true) {
			 authentificated = (
			<div>
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
				<Divider />
				<Link to={`/profile/${this.props.auth.user.id}`}>
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
					<MenuItem onTouchTap={this.props.requestLogout}>
						Logout
					</MenuItem>
				</Link>
			</div>);
		}
		else {
			authentificated = (
				<Link to="/login">
					<MenuItem onTouchTap={this.props.requestLogin}>
						Login
					</MenuItem>
				</Link>
			);
		}

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
				{authentificated}
			</Drawer>
		);
	}
}

function mapStateToProps(state) {
	return {
		open: state.ui.drawerOpened,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    onToggleDrawer: toggleDrawer,
  }, dispatch);
}

StudioDrawer.propTypes = {
	open: PropTypes.bool,
	onToggleDrawer: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	requestLogin: PropTypes.func.isRequired,
	requestLogout: PropTypes.func.isRequired
};

StudioDrawer.defaultProps = {
	open: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(authWrapper(StudioDrawer));
