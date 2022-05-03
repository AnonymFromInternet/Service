import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { ArticleInterface } from '../../../shared/types/article.interface';

export const getArticleAfterEditAction = createAction(
  ActionTypes.GET_ARTICLE_AFTER_EDIT,
  props<{ slug: string }>()
);

export const getArticleAfterEditSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_AFTER_EDIT_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleAfterEditFailureAction = createAction(
  ActionTypes.GET_ARTICLE_AFTER_EDIT_FAILURE
);
