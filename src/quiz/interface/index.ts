import * as express from 'express';

import GetQuizzes from './GetQuizzes';

const route = express.Router();

route.get('/', GetQuizzes);

export default route;
