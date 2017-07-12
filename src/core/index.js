import Medium from './Medium';
import Event from './Event';
import Type from './Type';
import User from './User';
import Exif from './Exif';

const defaultEvent = new Event('', '', '', []);
const defaultType = new Type('', '', []);

export {
	Medium,
	Event,
	Type,
	User,
	Exif,
	defaultEvent,
	defaultType,
};
