import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CreateArticleStateInterface } from '../types/createArticleState.interface';

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState) => createArticleState.validationErrors
);
