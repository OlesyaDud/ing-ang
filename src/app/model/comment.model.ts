export class Comment {
  id: number;
  text: string;
  post_id: number;
  createdAt: any;

  public constructor(init?: Partial<Comment>) {
    Object.assign(this, init);
}
}