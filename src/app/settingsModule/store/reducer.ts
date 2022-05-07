import { Action, createReducer, on } from '@ngrx/store';

import { SettingsStateInterface } from '../types/settingsState.interface';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../../authModule/store/actions/updateCurrentUser.action';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

export const settingsReducer = createReducer(
  initialState,
  on(updateCurrentUserAction, (state): SettingsStateInterface => {
    return {
      ...state,
      isSubmitting: true,
    };
  }),
  on(updateCurrentUserSuccessAction, (state): SettingsStateInterface => {
    return {
      ...state,
      isSubmitting: false,
    };
  }),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => {
      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
      };
    }
  )
);

export function reducer(state: SettingsStateInterface, action: Action) {
  return settingsReducer(state, action);
}
