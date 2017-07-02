import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightbox';
import mediaList from './mediaList';
import auth from './auth';


const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		mediaList,
		routing: routerReducer,
})

export default studioApp;
