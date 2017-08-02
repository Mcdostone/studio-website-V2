import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightbox';
import media from './mediaReducers';
import def from './defaultReducers';
import auth from './authReducers';
import uploads from './uploadReducers';
import covers from './coverReducers';
import albums from './albumReducers';
import reports from './reportReducers';
import notifications from './notificationReducers';
import users from './userReducers';

const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		media,
		notifications,
		default: def,
		albums,
		covers,
		reports,
		users,
		uploads,
		routing: routerReducer,
})

export default studioApp;
