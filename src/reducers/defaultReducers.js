import { Medium, Album, Upload } from '../core';


const initialState = {
	albums: () => new Album(undefined, '', new Date(), []),
	uploads: () => new Upload(null, null, {}),
	media: () => new Medium(null, '', '', [], null, null, null),
};

export default function (state = initialState, action) {
		return state;
}
