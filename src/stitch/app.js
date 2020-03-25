import { Stitch } from 'mongodb-stitch-browser-sdk';
require('dotenv').config();

const APP_ID = process.env.APP_ID;

const app = Stitch.hasAppClient(APP_ID) ?
            Stitch.getAppClient(APP_ID) :
            Stitch.initializeAppClient(APP_ID)

export { app };