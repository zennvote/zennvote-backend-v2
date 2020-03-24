import * as express from 'express';
import * as cors from 'cors';
import * as session from 'express-session';

export default async (app: express.Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(session({
    secret: process.env.SECRET as string,
    resave: false,
    saveUninitialized: true,
  }));

  app.get('/', (_req: express.Request, res: express.Response) => {
    res.send('Zennvote API server');
  });
};
