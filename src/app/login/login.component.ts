import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import * as UserActions from '../_shared/reducers/user/user.actions'
import * as fromRoot from '../app.store'

import { AuthGuard } from '../_shared/services/auth-guard.service'
import { UserService } from '../_shared/services/user.service'
import { setIndexRoute } from '../_shared/helpers/set-index-route.helper'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor (
    private store: Store<fromRoot.AppState>,
    private authGuardService: AuthGuard,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit () {
    if (this.authGuardService.checkAuth()) {
      const userRoles = this.userService.getUser().role
      this.router.navigate([setIndexRoute(userRoles)])
    }
  }

  onLogin ({ value }): void {
    this.store.dispatch(new UserActions.LoginAction({
      username: value.username.toLowerCase(),
      password: value.password
    }))
  }

  onRegister (): void {
    this.router.navigate(['/register'])
  }
}
