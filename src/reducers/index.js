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
import users from './userReducers';


const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		media,
		default: def,
		albums,
		covers,
		users,
		uploads,
		routing: routerReducer,
})

export default studioApp;
