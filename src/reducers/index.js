import { combineReducers } from 'redux';
import auth from './auth';
import ui from './ui';
import lightbox from './lightbox';

const studioApp = combineReducers({
		auth,
		ui,
		lightbox,
})

export default studioApp;
