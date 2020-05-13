import * as express from 'express';

import GetChoices from './GetChoices';
import GetChoicesValidator from './GetChoices/validator';

const route = express.Router();

route.get('/:type', GetChoicesValidator, GetChoices);

export default route;
