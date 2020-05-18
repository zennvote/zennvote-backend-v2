import Vote from '../domain/Vote';
import * as DAO from '../infrastructure/VoteDAO';
import * as SearchDAO from '@src/search/infrastructure/EpisodeDB';
import Episode from '@src/search/entity/Episode';

const getVote = async () => {
  const votes = DAO.getVotes();

  return votes;
};

export default getVote;
