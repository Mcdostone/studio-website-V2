import React from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'isomorphic-fetch';
import App from './App';
import studioTheme from './studioTheme';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
require('es6-promise').polyfill()


// injectTapEventPlugin();

const Studio = (props) => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(studioTheme)}>
			<App />
		</MuiThemeProvider>
	);
}

ReactDOM.render(<Studio />, document.getElementById('root'));
registerServiceWorker();
