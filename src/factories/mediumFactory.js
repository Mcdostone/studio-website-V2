import { Medium } from '../core';
import { buildExifFromGoogleDrive } from './exifFactory';

export const buildMediumFromDrivePicker = (data) => new Medium(data.id, data.url, 'drive', [])

export const buildMediumFromFirebase = (data) => {
	const medium = new Medium(data.id, data.src, data.from, [])
	medium.updatedAt = data.updatedAt;
	medium.createdAt = data.createdAt;
	return medium;
}

export const buildMediumFromGoogleDrive = (firebaseData, driveData) => {
	const medium = new Medium(
		firebaseData.id,
		driveData.thumbnailLink.split('=')[0],
		firebaseData.from,
		firebaseData.likes,
		firebaseData.album
	);
	medium.exif = buildExifFromGoogleDrive(driveData);
	medium.updatedAt = firebaseData.updatedAt;
	medium.createdAt = firebaseData.createdAt;
	return medium;
}
