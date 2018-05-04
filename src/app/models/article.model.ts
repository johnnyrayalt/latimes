import { Author } from "./author.model";

export class Article {
  constructor(
    public headline: string,
    public images: string,
    public blurb: string,
    public datetime: string,
    public author: Author
  ) { }
}
