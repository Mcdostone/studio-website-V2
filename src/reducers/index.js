import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import lightbox from './lightbox';
import media from './mediaReducers';
import auth from './authReducers';
import covers from './coverReducers';
import albums from './albumReducers';
import users from './userReducers';


const studioApp = combineReducers({
		ui,
		auth,
		lightbox,
		media,
		albums,
		covers,
		users,
		routing: routerReducer,
})

export default studioApp;
