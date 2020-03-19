import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import handleError from './error';

import Vote from '../../domain/Vote';
import createVote from '../../application/createVote';

const postVoteController = async (req: Request, res: Response) => {
  // VALIDATION
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ succeed: false, errors: errors.array() });
  }

  const vote: Vote = req.body;
  try {
    const action = async () => await createVote(vote);

    res.end({ succeed: true, result: action });
  } catch (error) {
    handleError(error, req, res);
  }
};

export default postVoteController;
