import { PopularTagsStateInterface } from '../types/popularTagsState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/getPopularTags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  errors: null,
};
const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getPopularTagsSuccessAction, (state, action) => {
    return {
      ...state,
      isLoading: false,
      data: action.popularTags,
    };
  }),
  on(getPopularTagsFailureAction, (state) => {
    return {
      ...state,
      isLoading: false,
      errors: 'Error by loading of popular tags',
    };
  })
);
export function reducer(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
