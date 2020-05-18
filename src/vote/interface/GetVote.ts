import { Request, Response } from "express";
import GetVotes from '../application/getVotes';

export default async (req: Request, res: Response) => {
  const votes = await GetVotes();

  res.json(votes);
};