import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
require('es6-promise').polyfill()


const Studio = (props) => {
	return <App />;
}

ReactDOM.render(<Studio />, document.getElementById('root'));
registerServiceWorker();
