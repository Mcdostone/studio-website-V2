import React from 'react';
import AppBar from 'material-ui/AppBar';
import Anime from 'react-anime';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDrawer, openSearch, closeSearch } from '../../actions/uiActions'
import Logo from '../Logo';
import Navigator from './Navigator';
import IconMore from './icons/IconMore';
import './Navbar.css';


class Navbar extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.auth.authentificated !== nextProps.auth.authentificated;
	}

	render() {
		let menu = undefined;
		menu = (
			<div id="navbar-menu">
				<Anime delay={(e, i) => i  * 500 + 500} duration={3000} opacity={[0, 1]}>
					<div>
						<Link className="navbar-link" to="/media">
							Media
						</Link>
					</div>
					<div>
						<Link className="navbar-link" to="/events">
							Events
						</Link>
					</div>
				</Anime>
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
						<Logo />
					</Link>
					{ this.props.auth.authentificated && menu }
					<Navigator />
				</AppBar>

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
