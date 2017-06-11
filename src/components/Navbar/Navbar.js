import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StudioDrawer from '../StudioDrawer';
import Search from './Search';
import logo from '../../assets/logo.png';
import Navigator from './Navigator';
import IconMore from './icons/IconMore';
import './Navbar.css';


class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			drawerOpened: false,
			searchOpened: false,
		};
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.handleNavigationMenu = this.handleNavigationMenu.bind(this);
		this.toggleSearch = this.toggleSearch.bind(this);
	}

	handleNavigationMenu(opened) {
		this.setState({ drawerOpened: opened });
	}

	toggleDrawer() {
		this.handleNavigationMenu(!this.state.drawerOpened);
	}

	handleSearch(opened) {
		this.setState({ searchOpened: opened });
	}

	toggleSearch() {
		this.handleSearch(!this.state.searchOpened);
	}

	closeSearch() {
		this.handleSearch(false);
	}

	render() {
		let menu = undefined
		if(this.props.auth.user !== null)
			menu =
			<div style={{ display: 'flex' }}>
				<Link className="navbar-link" to="/media">
					Media
				</Link>
				<Link className="navbar-link" to="/events">
					Events
				</Link>
				<Link className="navbar-link" to="/types">
					Types
				</Link>
			</div>
		return (
			<div>
				<AppBar
					style={{ padding: 0 }}
					className="navbar"
					titleStyle={{ flex: '0' }}
					showMenuIconButton={false}
				>
					<IconMore style={{ margin: '0 8px 0 0', width: '60px', height: '60px' }} onTouchTap={this.toggleDrawer} />

					<Link className="navbar-link" id="navbar-logo" to="/">
						<img src={logo} alt="" />
					</Link>
					{menu}
					<Navigator onSearchTap={this.toggleSearch} />
				</AppBar>

				{ this.state.searchOpened ? <Search toggleSearch={this.toggleSearch} /> : null }
				<StudioDrawer
					open={this.state.drawerOpened}
					onToggleDrawer={this.toggleDrawer}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, null)(Navbar);
