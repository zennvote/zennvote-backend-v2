import * as mysql from 'mysql';

export default async () => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT as string, 10),
    database: process.env.MYSQL_DATABASE,
  });

  connection.connect();

  (global as any).mysql = connection;
};
