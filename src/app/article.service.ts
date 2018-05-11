import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticle() {
    return this.articles;
  }

  getArticleById(articleId: string) {
    return this.database.object('articles/' + articleId);
  }
}
