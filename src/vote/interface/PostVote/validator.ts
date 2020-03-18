import { body } from 'express-validator';

const validator = [
  body('email').isEmail(),
  body('data').exists(),
  body('data.problem')
    .isArray({ min: 9, max: 9 }),

  body('data.problem.*').isString(),

  body('data.pitch').isArray({ min: 1, max: 5 }),
  body('data.pitch.*.episode').isInt({ min: 91, max: 100 }),
  body('data.pitch.*.index').isInt({ min: 1 }),

  body('data.voice').isArray({ min: 1, max: 5 }),
  body('data.voice.*.episode').isInt({ min: 91, max: 100 }),
  body('data.voice.*.index').isInt({ min: 1 }),

  body('data.funny').isArray({ min: 1, max: 5 }),
  body('data.funny.*.episode').isInt({ min: 91, max: 100 }),
  body('data.funny.*.index').isInt({ min: 1 }),

  body('data.content').isArray({ min: 1, max: 5 }),
  body('data.content.*.episode').isInt({ min: 91, max: 100 }),
  body('data.content.*.index').isInt({ min: 1 }),

  body('data.original').isArray({ min: 1, max: 5 }),
  body('data.original.*.episode').isInt({ min: 91, max: 100 }),
  body('data.original.*.index').isInt({ min: 1 }),

  body('data.sleep').isArray({ min: 1, max: 5 }),
  body('data.sleep.*.episode').isInt({ min: 91, max: 100 }),
  body('data.sleep.*.index').isInt({ min: 1 }),

  body('data.unit').isArray({ min: 1, max: 5 }),
  body('data.unit.*').isString(),

  body('data.new').isArray({ min: 1, max: 5 }),
  body('data.new.*').isString(),

  body('data.grow').isArray({ min: 1, max: 5 }),
  body('data.grow.*').isString(),

  body('data.master').isArray({ min: 1, max: 5 }),
  body('data.master.*').isString(),

  body('data.custom').optional().isArray(),
  body('data.custom.*.episode.episode').isInt({ min: 91, max: 100 }),
  body('data.custom.*.episode.index').isInt({ min: 1 }),
  body('data.custom.*.content').isString(),

  body('data.message').optional().isArray(),
  body('data.message.*.name').isString(),
  body('data.message.*.content').isString(),
];

export default validator;
