import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import mediaListSagas from './sagas/mediaList';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import './index.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mediaListSagas);

const Studio = (props) => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

ReactDOM.render(<Studio />, document.getElementById('root'));
registerServiceWorker();
