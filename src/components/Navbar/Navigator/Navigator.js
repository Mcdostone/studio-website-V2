import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import IconSearch from '../icons/IconSearch';


class Navigator extends React.Component {

	constructor(props) {
		super(props);
		this.state = { userMenuOpened: false };
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleRequestOpen = this.handleRequestOpen.bind(this);
		this.handleRequestProfile = this.handleRequestProfile.bind(this);
	}

	handleRequestClose() {
		this.setState({ userMenuOpened: false });
	}

	handleRequestOpen(event) {
		event.preventDefault();
		this.setState({
			userMenuOpened: true,
			anchorEl: event.currentTarget,
			widthMenu: event.currentTarget.offsetWidth,
		});
	}

	handleRequestProfile() {
		this.handleRequestClose();
		this.props.history.push('/profile');
	}


	render() {
		return (
			<div className="navigator">
				<IconSearch className="navbar-link" onTouchTap={this.props.onSearchTap} />
				<div onClick={this.handleRequestOpen} className="navbar-link">
					<Avatar src="http://lorempicsum.com/futurama/255/200/2" style={{ marginRight: '5px' }} />
					Yann Prono
				</div>
				<Popover
					open={this.state.userMenuOpened}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
					targetOrigin={{ horizontal: 'left', vertical: 'top' }}
					onRequestClose={this.handleRequestClose}
				>
					<Menu width={this.state.widthMenu - 1}>
						<MenuItem primaryText="Profile" onTouchTap={this.handleRequestProfile} />
						<MenuItem primaryText="Logout" />
					</Menu>
				</Popover>

				<a href="/login" className="navbar-link">
					Login
				</a>
			</div>
		);
	}
}

Navigator.propTypes = {
	history: PropTypes.object.isRequired,
};

export default withRouter(Navigator);
