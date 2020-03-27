import * as express from 'express';

import VoteRouter from '../vote/interface';

export default async (app: express.Express) => {
  app.use('/vote', VoteRouter);
};
