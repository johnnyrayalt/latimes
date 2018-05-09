import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from "./../models/article.model";
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
  providers: [ArticleService]
})
export class ArticleCardComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService) {}
  ngOnInit () {
      this.articles = this.articleService.getArticle();
  }

}
