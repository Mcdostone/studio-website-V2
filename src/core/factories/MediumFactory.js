import { Picture, Video } from '../media';

export default function(mediumData) {
	const mediaArray = Object.keys(mediumData).map(key =>mediumData[key]);
	console.log(mediaArray);
	return mediaArray.map(medium => {
		switch(medium.type) {
			case 'picture':
			return new Picture(medium.src, medium.from, medium.likes);
		}
	})
}
