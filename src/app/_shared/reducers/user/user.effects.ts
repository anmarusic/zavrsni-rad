import { Router } from '@angular/router'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { defer } from 'rxjs/observable/defer'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/ignoreElements'
import 'rxjs/add/operator/withLatestFrom'

import { Actions, Effect } from '@ngrx/effects'
import { Store, Action } from '@ngrx/store'
import { AppState } from '../../../app.store'
import * as UserActions from './user.actions'

import { CustomerService } from '../../api/customer.api'
import { UserService } from '../../services/user.service'

import { setIndexRoute } from '../../helpers/set-index-route.helper'

@Injectable()
export class UserEffects {
  @Effect() login$ = this.actions$
    .ofType(UserActions.ActionTypes.LOGIN)
    .switchMap((action: any) => this.customerService.login(action.payload)
      .map((res) => new UserActions.LoginSuccessAction(res))
      .catch((err) => Observable.of(new UserActions.LoginErrorAction(err)))
    )

  @Effect() loginSuccess$ = this.actions$
    .ofType(UserActions.ActionTypes.LOGIN_SUCCESS)
    .map((action: UserActions.LoginSuccessAction) => action.payload)
    .do((payload) => this.userService.saveSession(payload))
    .do(() => {
      const userRoles = this.userService.getUser().role
      typeof userRoles === 'undefined' ? this.userService.deleteSession() : this.router.navigate([setIndexRoute(userRoles)])
    })
    .ignoreElements()



  @Effect() register$ = this.actions$
    .ofType(UserActions.ActionTypes.REGISTER)
    .switchMap((action: any) => this.customerService.register(action.payload)
      .map((res) => new UserActions.RegisterSuccessAction(res))
      .catch((err) => Observable.of(new UserActions.RegisterErrorAction(err)))
    )

  @Effect() registerSuccess$ = this.actions$
    .ofType(UserActions.ActionTypes.REGISTER_SUCCESS)
    .do(() => this.router.navigate(['/login']))

  @Effect() logout$ = this.actions$
    .ofType(UserActions.ActionTypes.LOGOUT)
    .switchMap((action: any) => this.customerService.logout()
      .map((res) => { 
        this.userService.deleteSession()
        this.router.navigate(['/login'])
        return new UserActions.LogoutSuccessAction(res)
      })
      .catch((err) => {
        this.userService.deleteSession()
        this.router.navigate(['/login'])
        return Observable.of(new UserActions.LogoutErrorAction(err))
      })
    )
    
    


  @Effect() init$ = defer(() => {
    const user = this.userService.getUser()

    if (user) {
      this.store.dispatch(new UserActions.SetUserAction(user))
    }
  })

  constructor (
    private actions$: Actions,
    private customerService: CustomerService,
    private router: Router,
    private store: Store<AppState>,
    private userService: UserService
  ) { }
}
