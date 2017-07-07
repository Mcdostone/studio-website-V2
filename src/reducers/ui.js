import {
	DRAWER_CLOSE,
	DRAWER_OPEN,
	DRAWER_TOGGLE,
	SEARCH_OPEN,
	SEARCH_CLOSE } from '../actions/uiActions';

const initialState = {
		drawerOpened: false,
		searchOpened: false,
};

export default function (state = initialState, action) {
  switch(action.type) {
		case DRAWER_CLOSE:
			return Object.assign({}, state, {
        drawerOpened: false
      });

		case DRAWER_OPEN:
			return Object.assign({}, state, {
        drawerOpened: true,
      });

		case DRAWER_TOGGLE:
			return Object.assign({}, state, {
        drawerOpened: !state.drawerOpened,
      });

		case SEARCH_OPEN:
			return Object.assign({}, state, {
        searchOpened: true,
      });

		case SEARCH_CLOSE:
			return Object.assign({}, state, {
        searchOpened: false,
      });

		default:
			return state;
	}
}
