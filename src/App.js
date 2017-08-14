import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import scriptLoader from 'react-async-script-loader';
import store from './store';
import { history } from './history';
import './App.css';
import AppRouter from './AppRouter';

syncHistoryWithStore(history, store);

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gapiLoaded: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isScriptLoaded && !this.props.isScriptLoaded)
			window.gapi.client.load('drive', 'v2', () => this.setState({gapiLoaded: true}));
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.gapiLoaded === true;
	}

	render() {
		if(this.state.gapiLoaded) {
			return (
				<Provider store={store}>
					<AppRouter />
				</Provider>
			);
		}
		return null;
	}
}

export default scriptLoader('https://apis.google.com/js/api.js')(App);
