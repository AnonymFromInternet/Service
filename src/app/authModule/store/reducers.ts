import { AuthStateInterface } from '../types/authState.Interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};
const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: true,
    };
  })
);
export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
