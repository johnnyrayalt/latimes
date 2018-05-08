import { Author } from "./author.model";
export interface Article {
   headline: string,
   images: string,
   blurb: string,
   datePublished?: object,
   author: Author
}
