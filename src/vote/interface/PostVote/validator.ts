import { body } from 'express-validator';

const episodeValidator = (key: string, max: number, min: number = 1) => [
  body(`data.${key}`)
    .isArray().withMessage('Should be array')
    .isArray({ min }).withMessage(`${min} item required`)
    .isArray({ max }).withMessage(`Should be under ${max}`),
  body(`data.${key}.*.episode`)
    .isInt().withMessage('Should be integer')
    .isInt({ min: 91, max: 100 }).withMessage('Not season 9 (91-100)'),
  body(`data.${key}.*.index`)
    .isInt().withMessage('Should be integer')
    .isInt({ min: 1 }),
];

const selectionValidator = (key: string, max: number, min: number = 1) => [
  body(`data.${key}`)
    .isArray().withMessage('Should be array')
    .isArray({ min }).withMessage(`${min} item required`)
    .isArray({ max }).withMessage(`Should be under ${max}`),
  body(`data.${key}.*`).isString(),
];

const validator = [
  body('email').isEmail(),
  body('data').exists(),

  body('data.problem')
    .isArray({ min: 9, max: 9 }).withMessage('Should have 9 item'),
  body('data.problem.*').isInt().withMessage('Should be integer'),

  ...episodeValidator('pitch', 5),
  ...episodeValidator('voice', 5),
  ...episodeValidator('funny', 2),
  ...episodeValidator('content', 3),
  ...episodeValidator('original', 3),
  ...episodeValidator('sleep', 3),

  ...selectionValidator('unit', 3, 2),
  ...selectionValidator('new', 3, 3),
  ...selectionValidator('grow', 3, 0),
  ...selectionValidator('master', 3),

  body('data.custom').optional().isArray(),
  body('data.custom.*.episode.episode').isInt({ min: 91, max: 100 }),
  body('data.custom.*.episode.index').isInt({ min: 1 }),
  body('data.custom.*.content').isString(),

  body('data.message').optional().isArray(),
  body('data.message.*.name').isString(),
  body('data.message.*.content').isString(),
];

export default validator;
