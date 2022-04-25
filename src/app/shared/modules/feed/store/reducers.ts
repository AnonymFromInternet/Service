import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';

import { FeedStateInterface } from '../types/feedState.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state): FeedStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getFeedSuccessAction, (state, action): FeedStateInterface => {
    return {
      ...state,
      isLoading: false,
      data: action.feed,
    };
  }),
  on(getFeedFailureAction, (state): FeedStateInterface => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(routerNavigatedAction, (): FeedStateInterface => {
    return initialState;
  })
);
export function reducer(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
