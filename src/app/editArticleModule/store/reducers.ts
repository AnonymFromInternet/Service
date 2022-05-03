import { Action, createReducer, on } from '@ngrx/store';

import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from './actions/editArticle.action';
import { EditArticleStateInterface } from '../types/editArticleState.interface';
import {
  getArticleAfterEditAction,
  getArticleAfterEditFailureAction,
  getArticleAfterEditSuccessAction,
} from './actions/getArticleAfterEdit.action';

const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  isLoading: false,
  article: null,
  validationErrors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(editArticleAction, (state) => {
    return {
      ...state,
      isSubmitting: true,
    };
  }),
  on(editArticleSuccessAction, (state) => {
    return {
      ...state,
      isSubmitting: false,
    };
  }),
  on(editArticleFailureAction, (state, action) => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    };
  }),
  on(getArticleAfterEditAction, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getArticleAfterEditSuccessAction, (state, action) => {
    return {
      ...state,
      isLoading: false,
      article: action.article,
    };
  }),
  on(getArticleAfterEditFailureAction, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  })
);

export function reducer(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
