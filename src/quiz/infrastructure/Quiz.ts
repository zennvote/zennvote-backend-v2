import { Quiz } from '../entity/Quiz';

import { QuizModel, QuizDocument } from './QuizDB.model';

export const getQuizzes = async () => {
  const quizzes = await QuizModel.find().sort('index').select('-_id title contents');

  return quizzes.map(parseDocument);
};

const parseDocument = ({ title, contents }: QuizDocument): Quiz => ({ title, contents });
