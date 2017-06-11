import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class Authentificated extends React.Component {

	handleRender(props) {
		if (loggingIn) return null;
		return authenticated ? (React.createElement(component, { ...props, loggingIn, authenticated })) : (<Redirect to="/" />);
	}

	render() {
		const { component, ...rest} = this.props;
		return <Route {...rest} render={this.handleRender(component, )} />
	}
}

export default Authenticated;
