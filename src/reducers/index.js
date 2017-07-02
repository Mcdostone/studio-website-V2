import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightbox';
import media from './media';
import auth from './auth';
import cover from './cover';
import events from './events';


const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		media,
		events,
		cover,
		routing: routerReducer,
})

export default studioApp;
