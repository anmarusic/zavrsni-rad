import { ActionReducer } from '@ngrx/store'

import {
  ActionTypes as UserActionTypes,
  Actions
} from './user.actions'
import { $ } from 'protractor';

export interface State {
  data: any
}

const initialState: State = {
  data: null
}

export function reducer (
  state = initialState,
  action: Actions
): State {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
    case UserActionTypes.SET_USER:
      const { user } = action.payload
      const data = user || action.payload
      return { ...state, ...data }

    default:
      return state
  }
}
