import { Action } from '@ngrx/store'
import { type } from '../actions-util'

export const ActionTypes = {
  SET_USER:             type('[User] Set User'),
  LOGIN:                type('[User] Login'),
  LOGIN_SUCCESS:        type('[User] Login Success'),
  LOGIN_ERROR:          type('[User] Login Error'),
  LOGOUT:               type('[User] Logout'),
  LOGOUT_SUCCESS:       type('[User] Logout Success'),
  LOGOUT_ERROR:         type('[User] Logout Error'),
  REGISTER:             type('[User] Register'),
  REGISTER_SUCCESS:     type('[User] Register Success'),
  REGISTER_ERROR:       type('[User] Register Error')
}

export class SetUserAction implements Action {
  type = ActionTypes.SET_USER
  constructor (public payload: any) { }
}

export class LoginAction implements Action {
  type = ActionTypes.LOGIN
  constructor (public payload?) { }
}
export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS
  constructor (public payload) { }
}
export class LoginErrorAction implements Action {
  type = ActionTypes.LOGIN_ERROR
  constructor (public payload?) { }
}

export class RegisterAction implements Action {
  type = ActionTypes.REGISTER
  constructor (public payload?) { }
}
export class RegisterSuccessAction implements Action {
  type = ActionTypes.REGISTER_SUCCESS
  constructor (public payload) { }
}
export class RegisterErrorAction implements Action {
  type = ActionTypes.REGISTER_ERROR
  constructor (public payload?) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT
  constructor (public payload?) { }
}
export class LogoutSuccessAction implements Action {
  type = ActionTypes.LOGOUT_SUCCESS
  constructor (public payload?) { }
}
export class LogoutErrorAction implements Action {
  type = ActionTypes.LOGOUT_ERROR
  constructor (public payload?) { }
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutErrorAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterErrorAction
