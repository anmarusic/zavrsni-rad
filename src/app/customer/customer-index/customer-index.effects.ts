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
import { AppState } from '../../app.store'
import * as CustomerActions from './customer-index.actions'

import { CustomerService } from '../../_shared/api/customer.api'

import { setIndexRoute } from '../../_shared/helpers/set-index-route.helper'

@Injectable()
export class CustomerIndexEffects {

  @Effect() init$ = defer(() => {
    return
    
  })

  constructor (
    private actions$: Actions,
    private customerService: CustomerService,
    private router: Router,
    private store: Store<AppState>
  ) { }
}
