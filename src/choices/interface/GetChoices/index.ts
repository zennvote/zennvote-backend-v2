import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import ChoiceType from '@src/choices/entity/ChoiceType';
import { GetChoices, GetChoicesError } from '@src/choices/application/GetChoices';

import Log from '@src/logger';

export default async (request: Request, response: Response) => {
  const validation = validationResult(request);
  if (!validation.isEmpty()) {
    response.status(400).json({ succeed: false, errors: validation.array() });
    return;
  }

  const { type } = request.params;
  try {
    const choices = await GetChoices(type as ChoiceType);

    response.json({ result: choices });
  } catch (error) {
    Log.error('Error on GET /choices/:type');
    Log.error(error);
    Log.error(error.stack);
    handleError(error, request, response);
  }
};

const handleError = (error: Error, request: Request, response: Response) => {
  const message = error.message as GetChoicesError;

  switch (message) {
    case GetChoicesError.NO_CHOICE:
      response.status(500).json({ message: 'Choice not initialized' });
    default:
      response.status(500).end();
  }
};
