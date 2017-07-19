import { Album } from '../core';


const initialState = {
		albums: new Album(undefined, '', new Date(), []),
};

export default function (state = initialState, action) {
		return state;
}
