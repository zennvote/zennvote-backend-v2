import * as EpisodeDB from '../infrastructure/EpisodeDB';
import { getSeasonData } from '../infrastructure/sheet';

export const MigrateEpisode = async (season: number, purge: boolean = false) => {
  const episodes = await getSeasonData(season);

  if (purge) {
    await EpisodeDB.clearEpisode();
  }
  await EpisodeDB.addEpisodes(...episodes);
};
