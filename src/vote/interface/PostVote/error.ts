import { Request, Response } from 'express';
import Log from '../../../logger';

const handleError = (error: Error, req: Request, res: Response) => {
  Log.info('[INTERFACE] postVoteController ErrorHandler started');
  switch (error) {
    default:
      Log.info(`default case: ${JSON.stringify(error)}`);
      res.status(500).json({ succeed: false, result: error });
  }
};

export default handleError;
