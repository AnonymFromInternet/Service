import { Action, createReducer, on } from '@ngrx/store';

import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/createArticle.action';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state) => {
    return {
      ...state,
      isSubmitting: true,
    };
  }),
  on(createArticleSuccessAction, (state) => {
    return {
      ...state,
      isSubmitting: false,
    };
  }),
  on(createArticleFailureAction, (state, action) => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    };
  })
);

export function reducer(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
