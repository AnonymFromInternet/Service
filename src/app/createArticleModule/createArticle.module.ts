import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CreateArticleComponent } from './components/createArticle.component';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { CreateArticleService } from './services/createArticle.service';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { reducer } from './store/reducers';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducer),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
