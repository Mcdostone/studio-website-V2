import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightbox';
import media from './mediaReducers';
import auth from './auth';
// import types from './types';
import covers from './coverReducers';
import events from './eventReducers';


const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		media,
		events,
		covers,
		// types,
		routing: routerReducer,
})

export default studioApp;
