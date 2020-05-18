import * as express from 'express';
import * as cors from 'cors';
import * as session from 'express-session';

import Log from '../logger';

export default async (app: express.Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(session({
    secret: process.env.SECRET as string,
    resave: false,
    saveUninitialized: true,
  }));

  app.use((req, _res, next) => {
    Log.info(`[app request] ${req.method} - ${req.url}`);
    Log.info(`body: ${JSON.stringify(req.body)}`);
    next();
  });

  app.get('/', (_req: express.Request, res: express.Response) => {
    res.end(`Zennvote API server: ${process.env.npm_package_version}`);
  });
};
