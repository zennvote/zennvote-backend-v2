import Vote from '../domain/Vote';
import * as DAO from '../infrastructure/VoteDAO';
import Log from '../../logger';

const createVote = async (vote: Vote) => {
  Log.info('[APPLICATION] createVote start');
  Log.info(`vote: ${JSON.stringify(vote)}`);
  const result = await DAO.createVote(vote);

  return result.id as string;
};

export default createVote;
