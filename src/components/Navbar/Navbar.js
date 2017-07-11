import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDrawer, openSearch, closeSearch } from '../../actions/uiActions'
import StudioDrawer from '../StudioDrawer';
import logo from '../../assets/logo.png';
import Navigator from './Navigator';
import IconMore from './icons/IconMore';
import './Navbar.css';


class Navbar extends React.Component {

	render() {
		let menu = undefined;
		menu = (
			<div id="navbar-menu">
				<Link className="navbar-link" to="/media">
					Media
				</Link>
				<Link className="navbar-link" to="/events">
					Events
				</Link>
			</div>
		);
		return (
			<div>
				<AppBar
					style={{ padding: 0 }}
					className="navbar"
					titleStyle={{ flex: '0' }}
					showMenuIconButton={false}
				>
					<IconMore style={{ margin: '0 8px 0 0', width: '60px', height: '60px' }} onTouchTap={this.props.toggleDrawer} />

					<Link className="navbar-link" id="navbar-logo" to="/">
						<img src={logo} alt="" />
					</Link>
					{menu}
					<Navigator />
				</AppBar>
				<StudioDrawer
					open={this.props.drawerOpened}
					onToggleDrawer={this.props.toggleDrawer}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		drawerOpened: state.ui.drawerOpened,
		searchOpened: state.ui.searchOpened,
		auth: state.auth,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    toggleDrawer,
		openSearch,
		closeSearch,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
