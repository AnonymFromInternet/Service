import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { ArticleInputInterface } from '../../../shared/types/articleInput.interface';
import { ArticleInterface } from '../../../shared/types/article.interface';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';

export const editArticleAction = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const editArticleSuccessAction = createAction(
  ActionTypes.EDIT_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const editArticleFailureAction = createAction(
  ActionTypes.EDIT_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
