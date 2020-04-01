import { getSeasonData } from './sheet';
import { Connection } from 'mysql';
import mysql from '../../loader/mysql';
import Episode from '../domain/episode';

mysql();

export const MigrateSeason = async (season: number) => {
  const datas = await getSeasonData(season);
  const queryString = getEpisodeInsertQuery(datas);

  const connection = ((global as any).mysql as Connection);

  return connection.query(queryString);
};

const getEpisodeInsertQuery = (datas: Episode[]) => {
  const insertQueries = datas.map(({ episode, index, song, producer, votable, isNew }) => (
    `(${episode}, ${index}, '${song.replace('\'', '\\\'')}', '${producer.replace('\'', '\\\'')}', ${votable}, ${isNew})`
  ));

  return `
REPLACE INTO Episode (episode, idx, song, producer, votable, isNew)
VALUES ${insertQueries.join(',\n')};`;
};

MigrateSeason(9)
.then(() => console.log('fin'));
