import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { DeleteArticleService } from '../../services/deleteArticle.service';
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
} from '../actions/deleteArticle.action';
import { Router } from '@angular/router';

@Injectable()
export class DeleteArticleEffect {
  constructor(
    private actions$: Actions,
    private deleteArticleService: DeleteArticleService,
    private router: Router
  ) {}
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.deleteArticleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction();
          }),
          catchError(() => {
            return of(deleteArticleFailureAction());
          })
        );
      })
    )
  );
  redirectAfterDeleting$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
}
