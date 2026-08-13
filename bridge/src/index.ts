import { appChannel, eventChannel, onResume, onPause, getDataPath } from './bridge.js';

appChannel.send('ready');

export { eventChannel as channel, onResume, onPause, getDataPath };
