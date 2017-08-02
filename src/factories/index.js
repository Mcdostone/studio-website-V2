import { buildUploadFromFirebase, buildUpload } from './uploadFactory';

export { buildAlbumFromFirebase, buildUploadFromFirebase };
export {
	buildMediumFromDrivePicker,
	buildMediumFromFirebase,
	buildMediumFromGoogleDrive
} from './mediumFactory';
export { buildCoverFromFirebase } from './coverFactory';
export { buildUserFromFirebase, buildUserFromFirebaseAuth } from './userFactory';

export const build = (resource) => {
	switch(resource.toUpperCase()) {
		case 'ALBUMS':
			return buildAlbum();

		case 'UPLOADS':
			return buildUpload();

		default: // eslint-disable-next-line
	};

}
