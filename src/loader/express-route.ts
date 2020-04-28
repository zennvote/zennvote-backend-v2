import * as express from 'express';

import VoteRouter from '../vote/interface';
import SearchRouter from '../search/interface';

export default async (app: express.Express) => {
  app.use('/vote', VoteRouter);
  app.use('/search', SearchRouter);
};
