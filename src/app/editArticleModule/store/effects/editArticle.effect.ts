import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { EditArticleService } from '../../services/editArticle.service';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from '../actions/editArticle.action';

@Injectable()
export class EditArticleEffect {
  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
  editArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.editArticle(slug, articleInput).pipe(
          map((article) => {
            return editArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  // Redirecting effect
  redirectingAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
