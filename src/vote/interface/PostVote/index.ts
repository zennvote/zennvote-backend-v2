import { Request, Response } from 'express';
import { Vote } from '../../domain/Vote';
import { validationResult } from 'express-validator';

const postVoteController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ succeed: false, errors: errors.array() });
  }

  const { body } = req;
  const vote: Vote = body;

  try {
    const action = async () => await createVote(vote);

    res.end({ succeed: true, result: action.id });
  } catch (error) {
    handleError(error, req, res);
  }
};

export default postVoteController;
