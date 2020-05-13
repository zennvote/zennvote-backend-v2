import * as express from 'express';

import GetEpisode from './GetEpisode';
import GetEpisodeValidator from './GetEpisode/validator';

import MigrateEpisode from './MigrateEpisode';
import MigrateEpisodeValidator from './MigrateEpisode/validator';

const route = express.Router();

route.get('/episode', GetEpisodeValidator, GetEpisode);
route.post('/episode/migrate', MigrateEpisodeValidator, MigrateEpisode);

export default route;
