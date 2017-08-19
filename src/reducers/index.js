import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightboxReducers';
import media from './mediaReducers';
import def from './defaultReducers';
import auth from './authReducers';
import uploads from './uploadReducers';
import tags from './tagReducers';
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
		tags,
		covers,
		reports,
		users,
		uploads,
		routing: routerReducer,
})

export default studioApp;
