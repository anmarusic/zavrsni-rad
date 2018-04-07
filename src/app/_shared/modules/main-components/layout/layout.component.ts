import { NavigationEnd, Router } from '@angular/router'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../../../app.store'


import * as UserActions from '../../../reducers/user/user.actions'

@Component({
  selector: 'app-layout',
  template: `
    <div></div>
    
    <div class="taskbar">
      <span class="title"><span class="fas fa-taxi"></span><span class="fas fa-utensils"></span></span>
      <logout
      [user]="user"
      (logout)="onLogout()"></logout>
    </div>
    <navigation></navigation>

    <div class="page__content app"
      [ngClass]="{ 'page__content--no-navigation': !this.isNavigationVisible }">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public isNavigationVisible: boolean

  constructor (private router: Router, private store: Store<AppState>) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let pageContent = document.querySelector('.page__content')
        if (pageContent) {
          pageContent.scrollTop = 0
        }
      }
    })
  }

  onNavigationVisible (isNavigationVisible) {
    this.isNavigationVisible = isNavigationVisible
  }

  onLogout (): void {
    this.store.dispatch(new UserActions.LogoutAction())
  }
}
