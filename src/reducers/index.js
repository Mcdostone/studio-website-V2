import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import ui from './ui';
import lightbox from './lightbox';
import mediaList from './mediaList';


const studioApp = combineReducers({
		auth,
		ui,
		lightbox,
		mediaList,
		routing: routerReducer,
})

export default studioApp;
