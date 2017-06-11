import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Media from './components/Media';
import Events from './components/Events';
import Types from './components/Types';
import Profile from './components/Profile';
import Login from './components/Auth/Login';
import studioTheme from './studioTheme';
import './App.css';

injectTapEventPlugin();

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(studioTheme)}>
				<div className="studio-app">
					<BrowserRouter>
						<div>
							<Navbar />

							<Route exact path="/" component={Home} />
							<Route path="/media" component={Media} />
							<Route path="/events" component={Events} />
							<Route path="/types" component={Types} />
							<Route path="/profile" component={Profile} />
							<Route path="/login" component={Login} />

						</div>
					</BrowserRouter>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
