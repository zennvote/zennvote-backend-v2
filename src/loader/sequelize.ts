import { Sequelize } from 'sequelize';

export default async () => {
  const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT as string, 10),
      dialect: 'mysql',
      define: { timestamps: false },
    },
  );

  (global as any).sequelize = sequelize;
};
