import * as Sequelize from 'sequelize';

export class EpisodeDBModel extends Sequelize.Model<EpisodeDBModel> {
  song: string;
  producer: string;
  episode: number;
  idx: number;
  votable: boolean;
  isNew: boolean;
}

export const initEpisodeVO = () => {
  EpisodeDBModel.init(
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
      modelName: 'EpisodeDBModel',
      tableName: 'Episode',
    },
  );
};
