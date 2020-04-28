import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { GetEpisode, GetEpisodeError } from '../../application/GetEpisode';
import Log from '../../../logger';

export default async (request: Request, response: Response) => {
  const { episode, index } = request.query;

  try {
    const episodeData = await GetEpisode(episode, index);

    response.json({ result: episodeData });
  } catch (error) {
    Log.error('Error on GET /search/episode');
    Log.error(error);
    Log.error(error.stack);
    handleError(error, request, response);
  }
};

const handleError = (error: Error, request: Request, response: Response) => {
  const message = error.message as GetEpisodeError;

  switch (message) {
    case GetEpisodeError.NO_EPISODE:
      response.status(404).json({ message: 'Episode not found' });
    default:
      response.status(500).end();
  }
};
