import { Request, Response } from 'express';

import GetQuizzes from '@src/quiz/domain/GetQuizzes';
import Log from '@src/logger';

export default async (request: Request, response: Response) => {
  try {
    const quizzes = await GetQuizzes();

    response.json({ result: quizzes });
  } catch (error) {
    Log.error('Error on GET /choices/:type');
    Log.error(error);
    Log.error(error.stack);
    response.status(500).end();
  }
};
