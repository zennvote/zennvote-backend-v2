import { query } from 'express-validator';

export default [
  query('episode')
    .exists().bail()
    .isInt(),

  query('index')
    .exists().bail()
    .isInt(),
];
