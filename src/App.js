import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import IsAuthentificated from './IsAuthentificated';
import scriptLoader from 'react-async-script-loader';
import store from './store';
import { history } from './history';
import Navbar from './components/Navbar';
import StudioDrawer from './components/StudioDrawer';
import Home from './containers/Home';
import { mediaWrapper } from './wrappers';
import Albums from './containers/Albums';
import Media from './containers/Media';
import Profile from './containers/Profile';
import StudioCountdown from './containers/StudioCountdown';
import Admin from './containers/Admin';
import './App.css';

syncHistoryWithStore(history, store);

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gapiLoaded: true
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isScriptLoaded && !this.props.isScriptLoaded) {
			window.gapi.client.load('drive', 'v2', () => this.setState({gapiLoaded: true}));
		}
  }

	render() {
		if(this.state.gapiLoaded) {
			return (
				<Provider store={store}>
					<div className="studio-app">
						<Router history={history}>
							<div style={{width: '100%'}}>
								<Navbar id="navbar" />
								<StudioDrawer />
								<Route exact path="/" component={Home} />
								<Route exact path="/media" component={Media} />
								<Route exact path="/albums" component={Albums} />
								<Route path="/albums/:id" component={mediaWrapper('albums')} />
								<Route path="/admin" component={Admin} />
								<Route path="/profile/:id" component={IsAuthentificated(Profile)} />
								<Route path="/countdown" render={() => <StudioCountdown videoId="x537Cqg5nEI"/> } />
							</div>
						</Router>
					</div>
				</Provider>
			);
		}
		return null;
	}
}

export default scriptLoader('https://apis.google.com/js/api.js')(App);
