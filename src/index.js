import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import './index.css';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.state = store.getState();

const Studio = (props) => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

ReactDOM.render(<Studio />, document.getElementById('root'));
registerServiceWorker();
