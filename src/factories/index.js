import { buildUploadFromFirebase, buildUpload } from './uploadFactory';
//import { buildAlbumFromFirebase, buildAlbum } from './albumFactory';
export { buildAlbumFromFirebase, buildUploadFromFirebase };
export { buildCoverFromFirebase } from './coverFactory';
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
