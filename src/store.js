import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';
import { routingMiddleware } from './history';


const sagaMiddleware = createSagaMiddleware();
const enhancers = [
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 	applyMiddleware(sagaMiddleware, routingMiddleware),
];
const store = createStore(reducers, ...enhancers);
sagaMiddleware.run(sagas);

export default store;
