import * as express from 'express';

import { VoteRouter } from '@src/vote/interface';
import SearchRouter from '@src/search/interface';
import ChoicesRouter from '@src/choices/interface';
import QuizRouter from '@src/quiz/interface';

export default async (app: express.Express) => {
  app.use('/vote', VoteRouter);
  app.use('/search', SearchRouter);
  app.use('/choices', ChoicesRouter);
  app.use('/quiz', QuizRouter);
};
