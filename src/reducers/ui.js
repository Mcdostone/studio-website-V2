import {
	DRAWER_CLOSE,
	DRAWER_OPEN,
	DRAWER_TOGGLE,
	ACTIVE_MASONRY_VIEW,
	ACTIVE_SQUARE_VIEW,
	SEARCH_OPEN,
	SEARCH_CLOSE } from '../actions/uiActions';

const initialState = {
		drawerOpened: false,
		currentMedium: null,
		squareView: true,
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

		case ACTIVE_MASONRY_VIEW:
			return Object.assign({}, state, {
        squareView: false,
      });

		case ACTIVE_SQUARE_VIEW:
			return Object.assign({}, state, {
        squareView: true,
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
