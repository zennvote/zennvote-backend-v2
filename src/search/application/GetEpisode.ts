import * as EpisodeDB from '../infrastructure/EpisodeDB';

export const GetEpisode = async (episode: number, index: number) => {
  const result = await EpisodeDB.getEpisode(episode, index);

  if (result === null) {
    throw new Error(GetEpisodeError.NO_EPISODE);
  }

  return result;
};

export enum GetEpisodeError {
  NO_EPISODE = 'no-episode',
}
