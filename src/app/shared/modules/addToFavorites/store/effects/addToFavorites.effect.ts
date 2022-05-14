import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';

import { AddToFavoritesService } from '../../services/addToFavorites.service';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from '../actions/addToFavotires.action';
import { ArticleInterface } from '../../../../types/article.interface';

@Injectable()
export class AddToFavoritesEffect {
  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) {}
  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.dislike(slug)
          : this.addToFavoritesService.like(slug);
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        );
      })
    )
  );
}
