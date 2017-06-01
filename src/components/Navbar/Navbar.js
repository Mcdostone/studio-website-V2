import React from 'react';
import AppBar from 'material-ui/AppBar';
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

	toggleSearch() {
		this.setState({ searchOpened: !this.state.searchOpened });
	}

	render() {
		return (
			<div>
				<AppBar
					className="navbar"
					titleStyle={{ flex: '0' }}
					showMenuIconButton={false}
				>
					<IconMore style={{ margin: '0 8px 0 -16px', width: '60px', height: '60px' }} onTouchTap={this.toggleDrawer} />

					<a href="/" className="navbar-link" id="navbar-logo">
						<img src={logo} alt="" />
					</a>
					<a href="/" className="navbar-link">
						Media
					</a>
					<a href="/" className="navbar-link">
						Events
					</a>
					<a href="/" className="navbar-link">
						Types
					</a>

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

export default Navbar;
