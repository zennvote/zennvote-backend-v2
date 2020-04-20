import * as Sequelize from 'sequelize';
import Log from '../../logger';
import Episode from '../domain/episode';

export class EpisodeVO extends Sequelize.Model<EpisodeVO> {
  song: string;
  producer: string;
  episode: number;
  idx: number;
  votable: boolean;
  isNew: boolean;
}

export const initEpisodeVO = () => {
  EpisodeVO.init(
    {
      episode: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
      idx: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
      song: { type: Sequelize.STRING, allowNull: false },
      producer: { type: Sequelize.STRING, allowNull: false },
      votable: { type: Sequelize.BOOLEAN, allowNull: false },
      isNew: { type: Sequelize.BOOLEAN, allowNull: false },
    },
    {
      sequelize: (global as any).sequelize,
      modelName: 'EpisodeVO',
      tableName: 'Episode',
    },
  );
};
