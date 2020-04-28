import * as express from 'express';

import GetEpisode from './GetEpisode';

const route = express.Router();

route.get('/episode', GetEpisode);

export default route;
