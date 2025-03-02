export interface Votes {
  upvotes: number;
  downvotes: number;
  totalVotes: number;
}

export interface LearningResource {
  id: string;
  name: string;
  description: string;
  url: string;
  userId: string | null;
  votes: Votes;
}
export interface Cert {
  id: string;
  name: string;
  short_name: string;
  description: string;
  url: string;
  learningResourceList: LearningResource;
}
