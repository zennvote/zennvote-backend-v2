import { Document, Schema, model } from 'mongoose';

export interface ChoiceDocument extends Document {
  name: string;
  datas: string[];
}

const choiceSchema = new Schema({
  name: { type: String, required: true },
  datas: { type: [String], required: true },
});

export const ChoiceModel = model<ChoiceDocument>('Choices', choiceSchema);
