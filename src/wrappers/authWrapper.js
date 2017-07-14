import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, requestLogin, requestLogout } from '../actions/authActions';


export default function authWrapper(WrappedComponent) {

	const authContainer = class extends React.Component {
		render() {
			return (
				<WrappedComponent
					{...this.props}
					requestLogin={this.props.requestLogin}
					requestLogout={this.props.requestLogout}
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
			requestLogout,
			login
  	}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(authContainer);
}
