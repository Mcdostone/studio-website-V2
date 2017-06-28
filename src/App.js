import React from 'react';
import { Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware, routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import mediaListSagas from './sagas/mediaList';
import reducers from './reducers';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Media from './components/Media';
import Events from './components/Events';
import Types from './components/Types';
import Profile from './components/Profile';
import Login from './components/Auth/Login';
import StudioCountdown from './components/StudioCountdown';
import studioTheme from './studioTheme';
import './App.css';

injectTapEventPlugin();


const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const routingMiddleware = routerMiddleware(history);
const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(sagaMiddleware, routingMiddleware)
);

syncHistoryWithStore(history, store);
sagaMiddleware.run(mediaListSagas);


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user,
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
	redirectAction: routerActions.replace,
  failureRedirectPath: '/',
	allowRedirectBack: false,
})

class App extends React.Component {
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
							</div>
						</Router>
					</div>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
