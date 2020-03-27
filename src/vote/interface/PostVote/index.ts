import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import Log from '../../../logger';
import handleError from './error';
import Vote from '../../domain/Vote';
import createVote from '../../application/createVote';

const postVoteController = async (req: Request, res: Response) => {
  Log.info('[INTERFACE] postVoteController started');
  Log.info(`body: ${JSON.stringify(req.body)}`);

  // VALIDATION
  Log.debug('[INTERFACE] validation started');
  const errors = validationResult(req);
  Log.debug(`[INTERFACE] validation: ${JSON.stringify(errors.mapped())}`);
  if (!errors.isEmpty()) {
    Log.info(`[INTERFACE] validation error occurred: ${JSON.stringify(errors.array())})`);
    return res.status(400).json({ succeed: false, errors: errors.array() });
  }

  Log.debug('[INTERFACE] vote creation started');
  const vote: Vote = req.body;
  Log.debug(`[INTERFACE] vote created: ${JSON.stringify(vote)}`);

  try {
    const action = await createVote(vote);

    Log.info(`[INTERFACE] postVoteController success: ${action}`);
    res.json({ succeed: true, result: action });
  } catch (error) {
    Log.error('[INTERFACE] postVoteController error: creating vote');
    handleError(error, req, res);
  }
};

export default postVoteController;
