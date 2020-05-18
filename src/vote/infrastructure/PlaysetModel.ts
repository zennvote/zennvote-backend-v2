import { Document, Schema, model } from 'mongoose';

import VoteData from '../domain/VoteData';
import Vote from '../domain/Vote';

export interface VoteDocument extends Document {
  email: string;
  data: VoteData;
}

const stringArrSchema = () => ({ type: [String], required: true });
const episodeArrSchema = () => ({ type: [episodeSchema], required: true });

const episodeSchema = new Schema({
  episode: { type: Number, required: true },
  index: { type: Number, required: true },
});

const voteDataSchema = new Schema({
  problem: { type: [Number], required: true },
  pitch: episodeArrSchema(),
  voice: episodeArrSchema(),
  funny: episodeArrSchema(),
  content: episodeArrSchema(),
  original:  episodeArrSchema(),
  sleep: episodeArrSchema(),
  unit: stringArrSchema(),
  new: stringArrSchema(),
  grow: stringArrSchema(),
  master: stringArrSchema(),
  custom: [new Schema({
    episode: { type: episodeSchema, required: true },
    content: { type: String, required: true },
  })],
  message: [new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
  })],
});

const voteSchema = new Schema({
  email: { type: String, required: true },
  data: { type: voteDataSchema, required: true },
});

export const VoteModel = model<VoteDocument>('Vote', voteSchema);

export const formatVoteDocument = ({ email, data }: VoteDocument) => {
  return { email, data } as Vote;
};
