import * as express from 'express';

import PostVote from './PostVote';
import PostVoteValidator from './PostVote/validator';
import GetVote from './GetVote';

export const VoteRouter = express.Router();

VoteRouter.post('/', PostVoteValidator, PostVote);
VoteRouter.get('/', GetVote);
