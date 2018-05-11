import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Article } from './../models/article.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css'],
  providers: [ArticleService]
})
export class SingleArticleComponent implements OnInit {
  articleId: string;
  articleToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = urlParameters['id'];
    });
    this.articleToDisplay = this.articleService.getArticleById(this.articleId);
  }

}
