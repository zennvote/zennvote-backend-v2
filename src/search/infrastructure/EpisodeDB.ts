import Episode from '../entity/Episode';

import { EpisodeDBModel } from './EpisodeDB.model';

export const clearEpisode = async () => {
  await EpisodeDBModel.destroy({ where: {}, truncate: true });
};

export const addEpisodes = async (...episodes: Episode[]) => {
  const parsed = episodes.map(convertEpisode);
  if (parsed.length === 0) {
    throw Error();
  } else if (parsed.length === 1) {
    return await addSingleEpisode(parsed[0]);
  } else {
    return await addMultipleEpisode(parsed);
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

const convertEpisode = (episode: Episode) => {
  return {
    ...episode,
    idx: episode.index,
  };
};
