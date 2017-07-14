import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { adminReducer, localeReducer } from 'admin-on-rest';
import { reducer as formReducer } from 'redux-form';
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
		admin: adminReducer([{ name: 'users' }, { name: 'events' }]),
    locale: localeReducer(),
    form: formReducer,
})

export default studioApp;
