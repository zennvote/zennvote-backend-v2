import * as express from 'express';

import PostVote from './PostVote';
import PostVoteValidator from './PostVote/validator';

const route = express.Router();

route.post('/', PostVoteValidator, PostVote);

export default route;
