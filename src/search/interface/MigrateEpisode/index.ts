import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { MigrateEpisode } from '@src/search/application/MigrateEpisode';
import Log from '@src/logger';

export default async (request: Request, response: Response) => {
  const { authorization } = request.headers;
  if (!authorization) {
    response.status(401).end('Unauthorized');
    return;
  }
  if (authorization !== process.env.MANAGER_PASSWORD) {
    response.status(403).end('Invalid authorization');
    return;
  }

  const validation = validationResult(request);
  if (!validation.isEmpty()) {
    response.status(400).json({ succeed: false, errors: validation.array() });
    return;
  }

  const { season, purge } = request.body;
  try {
    await MigrateEpisode(season, purge);

    response.end();
  } catch (error) {
    Log.error('Error on POST /search/episode/migrate');
    Log.error(error);
    Log.error(error.stack);
    response.status(500).end();
  }
};
