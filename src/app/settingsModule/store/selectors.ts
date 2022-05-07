import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SettingsStateInterface } from '../types/settingsState.interface';

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState) => settingsState.validationErrors
);
