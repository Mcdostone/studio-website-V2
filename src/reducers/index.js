import { combineReducers } from 'redux';
import auth from './auth';
import ui from './ui';
import lightbox from './lightbox';
import mediaList from './mediaList';

const studioApp = combineReducers({
		auth,
		ui,
		lightbox,
		mediaList,
})

export default studioApp;
