import { Component } from '@angular/core';
import { masterArticlesArchive } from "./seed-data";
import { Article } from "./models/article.model";
import { ArticleCardComponent}  from "./article-card/article-card.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'LOS ANGELES TIMES CLONE';
  articles = [];
  constructor() {
    for(let article of masterArticlesArchive) {
      this.articles.push(new Article(article.headline, article.images, article.blurb, article.datePublished, article.author));
      console.log(article);
    }
  }

  displayArticle(article) {
    console.log(article.headline);
  }
}
