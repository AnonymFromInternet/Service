import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateArticleComponent } from './components/createArticle.component';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  declarations: [CreateArticleComponent],
  providers: [],
})
export class CreateArticleModule {}
