import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as session from 'express-session';
import * as mongoose from 'mongoose';

import Log from './logger';
import loader from './loader';

import VoteRouter from './vote/interface';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

loader({ expressApp: app });

app.use('/vote', VoteRouter);

app.listen(3000, () => {
  Log.info(`Server started on port ${port}`);
});
