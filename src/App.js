import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import asyncLoad from 'react-async-loader';
import IsAuthentificated from './IsAuthentificated';
import store from './store';
import { history } from './history';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import mediaWrapper from './containers/Media';
import Sandbox from './containers/Sandbox';
import Events from './containers/Events';
import Types from './containers/Types';
import Profile from './containers/Profile';
import Login from './components/Auth/Login';
import StudioCountdown from './containers/StudioCountdown';
import './App.css';


syncHistoryWithStore(history, store);

class App extends React.Component {

	componentDidMount() {
		// window.gapi.client.load('drive', 'v2');
	}

	render() {
		return (
			<Provider store={store}>
				<div className="studio-app">
					<Router history={history}>
						<div>
							<Navbar />
							<Route exact path="/" component={Home} />
							<Route exact path="/events" component={Events} />
							<Route exact path="/types" component={Types} />
							<Route path="/events/:id" component={mediaWrapper('events')} />
							<Route path="/types/:id" component={mediaWrapper('types')} />
							{/*<Route path="/profile" component={IsAuthentificated(Profile)} />*/}
							<Route path="/profile" component={Profile} />

							<Route path="/login" component={Login} />
							<Route path="/countdown" render={() => <StudioCountdown videoId="x537Cqg5nEI"/> } />
							<Route path="/sandbox" component={Sandbox} />
						</div>
					</Router>
				</div>
			</Provider>
		);
	}
}


function mapScriptsToProps(ownProps) {
  return {
    drive: {
			key: 'gapi',
			globalPath: 'window.gapi',
      url: 'https://apis.google.com/js/client.js',
      jsonp: true
    }
  };
}

export default asyncLoad(mapScriptsToProps)(App);;
