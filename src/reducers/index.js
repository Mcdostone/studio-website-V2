import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightbox';
import media from './mediaReducers';
import auth from './authReducers';
import types from './typesReducers';
import covers from './coverReducers';
import events from './eventReducers';
import users from './userReducers';


const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		media,
		events,
		covers,
		types,
		users,
		routing: routerReducer,
})

export default studioApp;
