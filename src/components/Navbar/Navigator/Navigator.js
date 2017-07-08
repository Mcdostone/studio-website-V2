import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import { authWrapper } from '../../../containers/wrappers';


class Navigator extends React.Component {

	constructor(props) {
		super(props);
		this.state = { userMenuOpened: false };
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleRequestProfile = this.handleRequestProfile.bind(this);
		this.handleRequestOpen = this.handleRequestOpen.bind(this);
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

	render() {
		let content = undefined;
		if(!this.props.auth.authentificated) {
			content = <a className="navbar-link" onClick={this.props.requestLogin}>Login</a>
		}
		else {
			content =
			<div style={{ display: 'flex' }}>
				<div onClick={this.handleRequestOpen} className="navbar-link">
					<Avatar src={this.props.auth.user.picture} style={{ marginRight: '5px' }} />
					{this.props.auth.user.name}
				</div>
				<Popover
					open={this.state.userMenuOpened}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
					targetOrigin={{ horizontal: 'left', vertical: 'top' }}
					onRequestClose={this.handleRequestClose}
				>
					<Menu width={this.state.widthMenu}>
						<MenuItem primaryText="Profile" onTouchTap={this.handleRequestProfile} />
						<MenuItem primaryText="Logout" onTouchTap={this.props.requestLogout} />
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
