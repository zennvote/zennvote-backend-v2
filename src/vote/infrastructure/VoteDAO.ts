import { VoteModel, formatVoteDocument } from './PlaysetModel';
import Vote from '../domain/Vote';
import Log from '../../logger';

export const createVote = async (form: Vote) => {
  Log.info('[INFRA] createVote start');
  Log.info(`form: ${JSON.stringify(form)}`);

  Log.debug('[INFRA] creating vote model');
  const vote = new VoteModel(form);
  Log.debug('[INFRA] saving vote model');
  const result = await vote.save();
  Log.info(`[INFRA] createVote successs: ${result.id}`);

  return result;
};

export const getVotes = async () => {
  const documents = await VoteModel.find({});
  const votes = documents.map(formatVoteDocument);

  return votes;
};
