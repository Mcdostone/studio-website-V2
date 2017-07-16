import SimpleThumbnail from './SimpleThumbnail';
import OverlayedThumbnail from './OverlayedThumbnail';
import overlayWrapper from '../../wrappers/overlayWrapper/overlayWrapper';


const Thumbnail = overlayWrapper(SimpleThumbnail);
export { Thumbnail, OverlayedThumbnail };
