import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EditArticleStateInterface } from '../types/editArticleState.interface';

export const editArticleFeatureSelector =
  createFeatureSelector<EditArticleStateInterface>('editArticle');

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.validationErrors
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.isLoading
);

export const articleAfterEditSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.article
);
