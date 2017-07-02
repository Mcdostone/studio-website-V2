import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import IsAuthentificated from './IsAuthentificated';
import store from './store';
import { history } from './history';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Media from './containers/Media';
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
//		window.gapi.client.load('drive', 'v2', null);
	}

	render() {
		return (
			<Provider store={store}>
				<div className="studio-app">
					<Router history={history}>
						<div>
							<Navbar />
							<Route exact path="/" component={Home} />
							<Route path="/media" component={Media} />
							<Route path="/events" component={Events} />
							<Route path="/types" component={Types} />
							<Route path="/profile" component={IsAuthentificated(Profile)} />
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

export default App;
