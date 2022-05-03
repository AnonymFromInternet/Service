import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ArticleService } from '../../../shared/services/article.service';
import {
  getArticleAfterEditAction,
  getArticleAfterEditFailureAction,
  getArticleAfterEditSuccessAction,
} from '../actions/getArticleAfterEdit.action';

@Injectable()
export class GetArticleAfterEditEffect {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
  getArticleAfterEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAfterEditAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article) => {
            return getArticleAfterEditSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleAfterEditFailureAction());
          })
        );
      })
    )
  );
}
