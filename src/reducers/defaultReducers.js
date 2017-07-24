import { Album } from '../core';


const initialState = {
	albums: () => new Album(undefined, '', new Date(), []),
	uploads: () => {}
};

export default function (state = initialState, action) {
		return state;
}
