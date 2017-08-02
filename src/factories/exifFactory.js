import {Exif} from '../core';

export const buildExifFromGoogleDrive = (data) => {
	const exif =  new Exif();
	const exifData = data.imageMediaMetadata;
	if(exifData) {
		exif.addMetadata('camera', exifData.cameraModel);
		exif.addMetadata('lens', exifData.lens);
		exif.addMetadata('exposure', exifData.exposureTime);
		exif.addMetadata('aperture', exifData.aperture);
		exif.addMetadata('iso', exifData.isoSpeed);
	}
	return exif;
}
