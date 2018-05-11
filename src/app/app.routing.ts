import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { SingleArticleComponent } from './single-article/single-article.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ArticleCardComponent
  },
  {
    path: 'articles',
    children: [
      {
        path: '',
        component: ArticleCardComponent
      },
      {
        path: ':id',
        component: SingleArticleComponent,
      },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
