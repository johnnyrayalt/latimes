import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from "./../models/article.model";
import { AppComponent } from './../app.component';
import { masterArticlesArchive } from '../seed-data';
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article: Article[];
  @Output() showArticle = new EventEmitter();

  displayArticle() {
    // for(let currentArticle of this.article) {
      // this.showArticle.push(new Article(article.headline, article.images, article.blurb, article.datePublished, article.author));
  }
  ngOnInit() {
    for(let currentArticle of masterArticlesArchive) {
      this.showArticle.emit(currentArticle)
      console.log(currentArticle.headline);
    }
  }

}
