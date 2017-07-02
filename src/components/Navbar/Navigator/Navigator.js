import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogin, requestLogout } from '../../../actions/authActions'
import { openSearch } from '../../../actions/uiActions'
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
		this.handleRequestLogout = this.handleRequestLogout.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
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

		handleRequestLogout() {
		this.handleRequestClose();
		this.props.requestLogout();
	}

	responseGoogle(response) {
		if(!response.error) {
			const user = {
				accessToken: response.accessToken,
				tokenId: response.tokenId,
				profile: response.profileObj,
			}
			this.props.login(user);
		}
	}

	render() {
		let content = undefined;
		if(!this.props.auth.authentificated) {
			content = <a className="navbar-link" onClick={this.props.requestLogin}>Login</a>
		}
		else {
			content =
			<div style={{ display: 'flex' }}>
				<IconSearch className="navbar-link" onTouchTap={this.props.openSearch} />
				<div onClick={this.handleRequestOpen} className="navbar-link">
					<Avatar src={this.props.auth.user.profile.picture} style={{ marginRight: '5px' }} />
					{this.props.auth.user.profile.name}
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
};

function mapStateToProps(state) {
	return {
		auth: state.auth,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		requestLogin,
		requestLogout,
		openSearch,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigator));
