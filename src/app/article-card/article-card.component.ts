import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Article } from "./../models/article.model";
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
  providers: [ArticleService]
})
export class ArticleCardComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  constructor(private router: Router, private articleService: ArticleService) {}
  ngOnInit () {
      this.articles = this.articleService.getArticle();
  }

  goToDetailPage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }

}
