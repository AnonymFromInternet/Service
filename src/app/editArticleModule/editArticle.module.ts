import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EditArticleComponent } from './components/editArticle.component';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { EditArticleService } from './services/editArticle.service';
import { EditArticleEffect } from './store/effects/editArticle.effect';
import { reducer } from './store/reducers';
import { ArticleService } from '../shared/services/article.service';
import { GetArticleAfterEditEffect } from './store/effects/getArticleAfterEdit.effect';
import { LoadingModule } from '../shared/modules/loading/loading.module';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([EditArticleEffect, GetArticleAfterEditEffect]),
    StoreModule.forFeature('editArticle', reducer),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, ArticleService],
})
export class EditArticleModule {}
