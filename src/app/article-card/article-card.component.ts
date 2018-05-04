import { Component, OnInit } from '@angular/core';
import { masterArticlesArchive } from "./../seed-data";
import { Article } from "./../models/article.model";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  articles = [];
  constructor() {
    for(let article of masterArticlesArchive) {
      this.articles.push(new Article(article.headline, article.images, article.blurb, article.datePublished, article.author));
    }
  }

  ngOnInit() {
  }

}
