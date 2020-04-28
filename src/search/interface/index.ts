import * as express from 'express';

import GetEpisode from './GetEpisode';
import GetEpisodeValidator from './GetEpisode/validator';

const route = express.Router();

route.get('/episode', GetEpisodeValidator, GetEpisode);

export default route;
