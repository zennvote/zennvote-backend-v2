import * as express from 'express';
import * as dotenv from 'dotenv';

import Log from './logger';
import loader from './loader';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

loader({ expressApp: app });

app.listen(3000, () => {
  Log.info(`Server started on port ${port}`);
});
