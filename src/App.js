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
import { mediaWrapper, resourceWrapper } from './wrappers';
import Events from './containers/Events';
import Media from './containers/Media';
import Types from './containers/Types';
import Profile from './containers/Profile';
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
							<Route exact path="/media" component={Media} />
							<Route exact path="/events" component={resourceWrapper('events', Events)} />
							<Route exact path="/types" component={resourceWrapper('types', Types)} />
							<Route path="/events/:id" component={mediaWrapper('events')} />
							<Route path="/types/:id" component={mediaWrapper('types')} />
							<Route path="/profile/:id" component={IsAuthentificated(mediaWrapper('users', Profile))} />
							<Route path="/countdown" render={() => <StudioCountdown videoId="x537Cqg5nEI"/> } />
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

export default asyncLoad(mapScriptsToProps)(App);
