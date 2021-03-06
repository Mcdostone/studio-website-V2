import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hide } from 'actions/notificationActions';
import Snackbar from 'material-ui/Snackbar';
import Navbar from './components/Navbar';
import StudioDrawer from './components/StudioDrawer';
import Home from './containers/Home';
import { resourceWrapper, mediaWrapper } from './wrappers';
import Albums from './containers/Albums';
import Media from './containers/Media';
import Profile from './containers/Profile';
import StudioCountdown from './containers/StudioCountdown';
import Admin from './containers/Admin';
import { history } from './history';
import { userIsAuthenticated, adminIsAuthenticated } from './auth';

const ConnectedApp = (props) =>
	<div className="studio-app">
		<Router history={history}>
			<div style={{width: '100%'}}>
				<Navbar id="navbar" />
				<StudioDrawer />
				<Route exact path="/" component={Home} />
				<Route exact path="/media" component={userIsAuthenticated(resourceWrapper(Media, 'media'))} />
				<Route exact path="/albums" component={userIsAuthenticated(resourceWrapper(Albums, 'albums'))} />
				<Route path="/albums/:id" component={userIsAuthenticated(mediaWrapper('albums'))} />
				<Route path="/admin" component={adminIsAuthenticated(Admin)} />
				<Route path="/profile/:id" component={userIsAuthenticated(Profile)} />
				<Route path="/countdown" render={() => <StudioCountdown videoId="x537Cqg5nEI"/> } />
			</div>
		</Router>
		<Snackbar
		open={props.notif.open}
		message={props.notif.message}
		autoHideDuration={props.notif.autoHideDuration}
		onRequestClose={(e) => e !== 'clickaway' ? props.hideNotif() : null}/>
	</div>

function mapStateToProps(state, ownProps) {
	return {
		notif: state.notifications,
		...ownProps,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		hideNotif: hide,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
