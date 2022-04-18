import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

// Action creating
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);
