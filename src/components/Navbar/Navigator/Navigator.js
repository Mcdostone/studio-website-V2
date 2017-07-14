import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import UserMenu from './UserMenu';
import { authWrapper } from '../../../wrappers';
import config from '../../../configuration';


class Navigator extends React.Component {

	constructor(props) {
		super(props);
		this.state = { userMenuOpened: false };
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleRequestProfile = this.handleRequestProfile.bind(this);
		this.handleRequestOpen = this.handleRequestOpen.bind(this);
		this.handleRequestLogout = this.handleRequestLogout.bind(this);
	}

	componentDidMount() {
		const userData = JSON.parse(sessionStorage.getItem(config.APP.LOCAL_STORAGE_KEY));
		if(userData && userData.authentificated) {
			this.props.login(userData);
		}
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
		this.props.history.push(`/profile/${this.props.auth.user.id}`);
	}

	handleRequestLogout() {
		this.handleRequestClose();
		this.props.requestLogout();
	}

	render() {
		let content = undefined;
		if(!this.props.auth.authentificated) {
			content = <a className="navbar-link" onClick={this.props.requestLogin}>Login</a>
		}
		else {
			content =
			<div style={{ display: 'flex' }}>
			<UserMenu auth={this.props.auth} handleRequestOpen={this.handleRequestOpen} />
				<Popover
					open={this.state.userMenuOpened}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
					targetOrigin={{ horizontal: 'left', vertical: 'top' }}
					onRequestClose={this.handleRequestClose}
				>
					<Menu width={this.state.widthMenu}>
						<MenuItem primaryText="Profile" onTouchTap={this.handleRequestProfile} />
						<MenuItem primaryText="Logout" onTouchTap={this.handleRequestLogout} />
					</Menu>
				</Popover>
			</div>
		}

		return (
			<div className="navigator">
				{content}
			</div>
		);
	}
}

Navigator.propTypes = {
	history: PropTypes.object.isRequired,
	requestLogout: PropTypes.func.isRequired,
	requestLogin: PropTypes.func.isRequired
}

export default withRouter(authWrapper(Navigator));
