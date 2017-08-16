import { buildUploadFromFirebase, buildUpload } from './uploadFactory';
import { buildAlbumFromFirebase, buildAlbum } from './albumFactory';
import { buildTagFromFirebase, buildTag } from './tagFactory';
export { buildCoverFromFirebase, buildCover } from './coverFactory';
export { buildReportFromFirebase } from './reportFactory';
export { buildUserFromFirebase, buildUserFromFirebaseAuth } from './userFactory';
export { buildMediumFromDrivePicker, buildMediumFromFirebase, buildMediumFromGoogleDrive } from './mediumFactory';
export {
	buildAlbumFromFirebase,
	buildUploadFromFirebase,
	buildTagFromFirebase,
	buildTag
};

export const build = (resource) => {
	switch(resource.toUpperCase()) {
		case 'ALBUMS':
			return buildAlbum();

		case 'UPLOADS':
			return buildUpload();

		case 'TAGS':
			return buildTag();

		default: // eslint-disable-next-line
	};

}
