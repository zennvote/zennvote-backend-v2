import * as express from 'express';

import PostVote from './PostVote';
import PostVoteValidator from './PostVote/validator';

export const VoteRouter = express.Router();

VoteRouter.post('/', PostVoteValidator, PostVote);
