import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from '../types/authState.Interface';

export const authFeatureSelector =
  // AppState is deprecated?
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);
