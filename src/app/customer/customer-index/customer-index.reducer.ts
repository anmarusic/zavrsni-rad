import { ActionReducer } from '@ngrx/store'

import { ActionTypes as UserActionTypes, Actions } from './customer-index.actions'

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
    default:
      return state
  }
}
