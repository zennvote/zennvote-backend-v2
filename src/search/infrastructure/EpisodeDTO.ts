import { getSeasonData } from './sheet';
import Episode from '../entity/episode';
import { EpisodeVO } from './EpisodeVO';
import Log from '../../logger';

export const MigrateSeason = async (...seasons: number[]) => {
  await EpisodeVO.destroy({ where: {}, truncate: true });

  const dataPromise = await Promise.all(
    seasons.map(async season => await getSeasonData(season)),
  );

  const data = (await dataPromise).flat().map(episode => ({
    episode: episode.episode,
    idx: episode.index,
    song: episode.song,
    producer: episode.producer,
    votable: episode.votable,
    isNew: episode.isNew,
  } as EpisodeVO));

  Log.debug(await EpisodeVO.bulkCreate(data.flat()));
};
