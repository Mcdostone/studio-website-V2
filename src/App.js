import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import studioTheme from './studioTheme';
import './App.css';
import Navbar from './components/Navbar';
import Media from './components/Media';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(studioTheme)}>
				<div>
					<Navbar />
					<Media />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
