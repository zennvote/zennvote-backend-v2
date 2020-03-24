import { Express } from 'express';

import Log from '../logger';
import mongoose from './mongoose';
import express from './express';

type loaderArgs = {
  expressApp: Express,
};

export default async ({ expressApp }: loaderArgs) => {
  Log.info(`
  ███████╗███████╗███╗░░██╗███╗░░██╗██╗░░░██╗░█████╗░████████╗███████╗  ░██████╗███████╗██████╗░██╗░░░██╗███████╗██████╗░
  ╚════██║██╔════╝████╗░██║████╗░██║██║░░░██║██╔══██╗╚══██╔══╝██╔════╝  ██╔════╝██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗
  ░░███╔═╝█████╗░░██╔██╗██║██╔██╗██║╚██╗░██╔╝██║░░██║░░░██║░░░█████╗░░  ╚█████╗░█████╗░░██████╔╝╚██╗░██╔╝█████╗░░██████╔╝
  ██╔══╝░░██╔══╝░░██║╚████║██║╚████║░╚████╔╝░██║░░██║░░░██║░░░██╔══╝░░  ░╚═══██╗██╔══╝░░██╔══██╗░╚████╔╝░██╔══╝░░██╔══██╗
  ███████╗███████╗██║░╚███║██║░╚███║░░╚██╔╝░░╚█████╔╝░░░██║░░░███████╗  ██████╔╝███████╗██║░░██║░░╚██╔╝░░███████╗██║░░██║
  ╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░╚══╝░░░╚═╝░░░░╚════╝░░░░╚═╝░░░╚══════╝  ╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝
`);

  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV = 'development';
  }
  Log.info(`NODE_ENV: ${process.env.NODE_ENV}`);

  await mongoose();
  Log.info('Mongoose initialized');

  await express(expressApp);
  Log.info('Express app initialized');
};
