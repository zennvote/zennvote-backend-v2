import { VoteModel } from './PlaysetModel';
import Vote from '../domain/Vote';

export const createVote = async (form: Vote) => {
  const vote = new VoteModel(form);
  const result = await vote.save();

  return result;
};
