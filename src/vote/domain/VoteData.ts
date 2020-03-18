export default interface VoteData {
  problem: number[];
  pitch: string[];
  voice: string[];
  funny: string[];
  content: string[];
  original: string[];
  sleep: string;
  unit: string;
  new: string;
  grow: string;
  master: string[];
  custom: {
    episode: string;
    content: string;
  }[];
  message: {
    name: string;
    content: string;
  }[];
}
