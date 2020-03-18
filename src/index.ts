import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as session from 'express-session';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;w

app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SECRET as string,
  resave: false,
  saveUninitialized: true,
}));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Zennvote API server');
});

app.listen(3000, () => {
  console.log(`Server started on port ${port}`);
});
