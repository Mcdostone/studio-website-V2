import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, requestLogin, requestLogout, requestLoginFromStorage } from 'actions/authActions';
import { withRouter } from 'react-router-dom';

export default function authWrapper(WrappedComponent) {

	const authContainer = class extends React.Component {
		render() {
			return (
				<WrappedComponent
					{...this.props}
					requestLogin={this.props.requestLogin}
					requestLogout={this.props.requestLogout}
					requestLoginFromStorage={this.props.requestLoginFromStorage}
					auth={this.props.auth} />
			);
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			requestLogin,
			requestLoginFromStorage,
			requestLogout,
			login
  	}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(authContainer));
}
