export interface ILikeDislike {
  total: number;
  users: string[];
}

export default interface IEvent {
  id: string;
  organizer_id: string;
  organizer_name: string;
  title: string;
  description: string;
  location: string;
  photo: string;
  likes: ILikeDislike;
  dislikes: ILikeDislike;
  created_at: string;
  updated_at: string;
}
