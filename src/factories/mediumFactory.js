import { Medium } from '../core';
import { buildExifFromGoogleDrive } from './exifFactory';

export const buildMediumFromDrivePicker = (data) => {
	const medium = new Medium(data.id, data.url, 'drive', [])
	medium.type = data.mimeType.split('/')[0];
	return medium;
}

export const buildMediumFromFirebase = (data) => {
	const medium = new Medium(data.id, data.src, data.from, data.likes, data.album, data.tags);
	medium.updatedAt = data.updatedAt;
	medium.createdAt = data.createdAt;
	medium.visible = data.visible;
	return medium;
}

export const buildMediumFromGoogleDrive = (firebaseData, driveData) => {
	const medium = buildMediumFromFirebase(firebaseData);
	medium.src = driveData.thumbnailLink.split('=')[0];
	medium.exif = buildExifFromGoogleDrive(driveData);
	return medium;
}
