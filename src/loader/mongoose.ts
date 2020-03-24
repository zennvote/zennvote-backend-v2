import { connect, ConnectionOptions } from 'mongoose';

export default async () => {
  const option: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await connect(process.env.MONGO_URI as string, option);
};
