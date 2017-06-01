import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import studioTheme from './studioTheme';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(studioTheme)}>
				<Navbar />
			</MuiThemeProvider>
		);
	}
}

export default App;
