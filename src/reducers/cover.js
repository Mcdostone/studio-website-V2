import { COVER_ADD } from '../actions/coverActions';


const initialState = {};

export default function (state = initialState, action) {
  switch(action.type) {
		case COVER_ADD:
			const pageCover = {};
			pageCover[action.payload.page] = action.payload.url;
			return Object.assign({}, state, pageCover);

		default:
			return state;
	}
}
