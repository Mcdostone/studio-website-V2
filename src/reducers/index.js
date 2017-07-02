import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightbox';
import media from './media';
import auth from './auth';


const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		media,
		routing: routerReducer,
})

export default studioApp;
