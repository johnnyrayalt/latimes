import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from "./../models/article.model";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  article: Article = {
    headline: '',
    images: '',
    blurb: '',
    datePublished: Date,
    author: {
      name: '',
      photo: '',
      bio: ''
    }
  };

  articles: Article[];

  ngOnInit() {
    this.articles = [
      {
        headline: 'Lorem ipsum dolor sit amet',
        images: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/13/104279122-IMG_0426.530x298.jpg?v=1487013108',
        blurb:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        datePublished: new Date(),
        author: {
          name: 'Johnny Alt',
          photo: 'http://frederatorblogs.com/random/files/2008/04/b-corrupted-by-random-noise-bit-error-rate0020.thumbnail.gif',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      },
      {
        headline: 'Lorem ipsum dolor sit amet',
        images: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/13/104279122-IMG_0426.530x298.jpg?v=1487013108',
        blurb:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        datePublished: new Date('2/13/1991'),
        author: {
          name: 'Johnny Alt',
          photo: 'http://frederatorblogs.com/random/files/2008/04/b-corrupted-by-random-noise-bit-error-rate0020.thumbnail.gif',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      }
    ]

  }

}
