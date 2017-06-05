import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import studioTheme from './studioTheme';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Media from './components/Media';
import Events from './components/Events';
import Types from './components/Types';
import Profile from './components/Profile';


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
						</div>
					</BrowserRouter>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
