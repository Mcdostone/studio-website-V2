import React from 'react';
import { Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import store from './store';
import { history } from './history';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Media from './components/Media';
import Sandbox from './components/Sandbox';
import Events from './components/Events';
import Types from './components/Types';
import Profile from './components/Profile';
import Login from './components/Auth/Login';
import StudioCountdown from './components/StudioCountdown';
import studioTheme from './studioTheme';
import './App.css';
require('./Logger');

injectTapEventPlugin();
syncHistoryWithStore(history, store);

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user,
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
	redirectAction: routerActions.replace,
  failureRedirectPath: '/',
	allowRedirectBack: false,
})

class App extends React.Component {

	componentDidMount() {
		window.gapi.client.load('drive', 'v2', null);
	}

	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider muiTheme={getMuiTheme(studioTheme)}>
					<div className="studio-app">
						<Router history={history}>
							<div>
								<Navbar />
								<Route exact path="/" component={Home} />
								<Route path="/media" component={Media} />
								<Route path="/events" component={Events} />
								<Route path="/types" component={Types} />
								<Route path="/profile" component={UserIsAuthenticated(Profile)} />
								<Route path="/login" component={Login} />
								<Route path="/countdown" render={() => <StudioCountdown videoId="x537Cqg5nEI"/> } />
								<Route path="/sandbox" component={Sandbox} />
							</div>
						</Router>
					</div>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
