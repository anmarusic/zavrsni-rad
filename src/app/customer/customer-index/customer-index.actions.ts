import { Action } from '@ngrx/store'
import { type } from '../../_shared/reducers/actions-util'

export const ActionTypes = {
  GET_CUSTOMER:         type('[Customer] Get Customer'),
  GET_CUSTOMER_SUCCESS: type('[Customer] Get Customer Success'),
  GET_CUSTOMER_ERROR:   type('[Customer] Get Customer Error')

}

export class GetCustomerAction implements Action {
  type = ActionTypes.GET_CUSTOMER
  constructor (public payload?: any) { }
}

export class GetCustomerSuccessAction implements Action {
  type = ActionTypes.GET_CUSTOMER_SUCCESS
  constructor (public payload?: any) { }
}

export class GetCustomerErrorAction implements Action {
  type = ActionTypes.GET_CUSTOMER_SUCCESS
  constructor (public payload?: any) { }
}


export type Actions
= GetCustomerAction
| GetCustomerSuccessAction
| GetCustomerErrorAction
