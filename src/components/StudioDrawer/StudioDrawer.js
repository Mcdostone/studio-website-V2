import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import { toggleDrawer } from '../../actions/uiActions'
import { authWrapper } from '../../wrappers';


class StudioDrawer extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.auth.authentificated !== nextProps.auth.authentificated ||
			this.props.open !== nextProps.open;
	}

	getAdminListItems() {
		const resources = ['Users', 'Albums', 'Media'];
		return (
			<ListItem
			primaryText="Admin"
			primaryTogglesNestedList={true}
			nestedItems={resources.map(r =>
					<Link key={r} to={`/admin/${r.toLocaleLowerCase()}`}>
						<ListItem onTouchTap={this.props.onToggleDrawer} key={1} primaryText={r} />
					</Link>
			)} />
		);
	}

	render() {
		let authentificated = undefined;
		if(this.props.auth.authentificated === true) {
			 authentificated = (
			<div>
				<Divider />
				<Link to="/media">
					<ListItem onTouchTap={this.props.onToggleDrawer}>
						Media
					</ListItem>
				</Link>
				<Link to="/albums">
					<ListItem onTouchTap={this.props.onToggleDrawer}>
						Albums
					</ListItem>
				</Link>
				<Divider />
				<Link to={`/profile/${this.props.auth.user.id}`}>
					<ListItem onTouchTap={this.props.onToggleDrawer}>
						Your profile
					</ListItem>
				</Link>
				<Link to="/sandbox">
					<ListItem onTouchTap={this.props.onToggleDrawer}>
						Sandbox
					</ListItem>
				</Link>
				<Link to="/logout">
					<ListItem onTouchTap={this.props.requestLogout}>
						Logout
					</ListItem>
				</Link>
			</div>);
		}
		else {
			authentificated = (
				<Link to="/login">
					<ListItem onTouchTap={this.props.requestLogin}>
						Login
					</ListItem>
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
				<List>
					<Link to="/">
						<ListItem onTouchTap={this.props.onToggleDrawer}>
							Studio
						</ListItem>
					</Link>
					<Link to="/">
						<ListItem onTouchTap={this.props.onToggleDrawer}>
							About
						</ListItem>
					</Link>
					<Link to="/">
						<ListItem onTouchTap={this.props.onToggleDrawer}>
							Works
						</ListItem>
					</Link>
					{this.getAdminListItems()}
					<Divider />
					{authentificated}
				</List>
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
