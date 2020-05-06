import { param } from 'express-validator';

export default [
  param('type')
    .exists()
    .isIn(['master', 'grow', 'unit', 'new']),
];
