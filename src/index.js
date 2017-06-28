import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const Studio = (props) => {
	return <App />;
}

ReactDOM.render(<Studio />, document.getElementById('root'));
registerServiceWorker();
