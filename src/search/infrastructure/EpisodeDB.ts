import Episode from '../entity/Episode';

import { EpisodeDBModel } from './EpisodeDB.model';

export const clearEpisode = async () => {
  await EpisodeDBModel.destroy({ where: {}, truncate: true });
};

export const addEpisodes = async (...episodes: Episode[]) => {
  if (episodes.length === 0) {
    throw Error();
  } else if (episodes.length === 1) {
    return await addSingleEpisode(episodes[0]);
  } else {
    return await addMultipleEpisode(episodes);
  }
};

const addSingleEpisode = async (episode: Episode) => {
  await EpisodeDBModel.create(episode);
};

const addMultipleEpisode = async (episodes: Episode[]) => {
  await EpisodeDBModel.bulkCreate(episodes);
};

export const getEpisode = async (episode: number, index: number): Promise<Episode | null> => {
  const query = {
    where: { episode, idx: index },
  };

  const result = await EpisodeDBModel.findOne(query);

  return result ? convertModel(result.dataValues) : null;
};

const convertModel = (model: EpisodeDBModel) : Episode => {
  const result = {
    episode: model.episode,
    index: model.idx,
    song: model.song,
    producer: model.producer,
    votable: model.votable,
    isNew: model.isNew,
  } as Episode;

  return result;
};
