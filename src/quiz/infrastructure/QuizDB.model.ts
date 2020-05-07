import { Document, Schema, model } from 'mongoose';

export interface QuizDocument extends Document {
  index: number;
  title: string;
  contents: string[];
}

const quizSchema = new Schema({
  index: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  contents: { type: [String], required: true },
});

export const QuizModel = model<QuizDocument>('Quizzes', quizSchema);
