import { body } from 'express-validator';

export default [
  body('season')
    .exists().bail()
    .isInt(),

  body('purge')
    .exists().bail()
    .isBoolean(),
];
