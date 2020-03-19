import Vote from '../domain/Vote';
import * as DAO from '../infrastructure/VoteDAO';

const createVote = async (vote: Vote) => {
  const result = await DAO.createVote(vote);

  return result.id as string;
};

export default createVote;
