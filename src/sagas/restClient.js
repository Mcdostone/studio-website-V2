import { RestClient } from 'aor-firebase-client';
import config from '../configuration';

const trackedResources = ['users', 'events'];

export default RestClient(trackedResources, config.FIREBASE_CONFIG);
