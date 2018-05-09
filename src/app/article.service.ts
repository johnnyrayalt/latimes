import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { masterArticlesArchive } from './seed-data';


@Injectable()
export class ArticleService {

  constructor() { }

  getArticle() {
    return masterArticlesArchive;
  }
}
