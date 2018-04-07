import { Observable } from 'rxjs/Observable'
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  Action
} from '@ngrx/store'
import { environment as ENV } from '../environments/environment'

import { storeFreeze } from 'ngrx-store-freeze'
import { logger } from './_shared/reducers/logger.meta-reducer'
import { handleUndo } from 'ngrx-undo'

import * as fromUser from './_shared/reducers/user/user.reducer'
import * as fromRouter from '@ngrx/router-store'

export interface AppState {
  user: fromUser.State,
  routerReducer: fromRouter.RouterReducerState
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.reducer,
  routerReducer: fromRouter.routerReducer
}

export const metaReducers: MetaReducer<AppState>[] = ENV.production
  ? [logger, handleUndo]
  : [logger, handleUndo]

export interface ActionWithPayload<T> extends Action {
  payload: T
}

export interface UnsafeAction extends Action {
  payload?: any
}
