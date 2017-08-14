import { buildUploadFromFirebase, buildUpload } from './uploadFactory';
import { buildAlbumFromFirebase, buildAlbum } from './albumFactory';
export { buildAlbumFromFirebase, buildUploadFromFirebase };
export { buildCoverFromFirebase, buildCover } from './coverFactory';
export { buildReportFromFirebase } from './reportFactory';
export { buildUserFromFirebase, buildUserFromFirebaseAuth } from './userFactory';
export {
	buildMediumFromDrivePicker,
	buildMediumFromFirebase,
	buildMediumFromGoogleDrive
} from './mediumFactory';

export const build = (resource) => {
	switch(resource.toUpperCase()) {
		case 'ALBUMS':
			return buildAlbum();

		case 'UPLOADS':
			return buildUpload();

		default: // eslint-disable-next-line
	};

}
