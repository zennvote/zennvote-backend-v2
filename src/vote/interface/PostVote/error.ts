import { Request, Response } from 'express';

const handleError = (error: Error, req: Request, res: Response) => {
  switch (error) {
    default:
      res.status(500).json({ succeed: false, result: error });
  }
};

export default handleError;
