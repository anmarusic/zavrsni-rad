import { Injectable } from '@angular/core'
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router'
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor (private router: Router) { }

  checkAuth () {
    const accessTokenId = window.localStorage.getItem('$LoopBack$accessTokenId')
    const currentUserId = window.localStorage.getItem('$LoopBack$currentUserId')

    if (accessTokenId && currentUserId) {
      return true
    } else {
      if (this.router.routerState.snapshot.url.toString() !== '/register') {
        this.router.navigate(['/login'])
      }
      return false
    }
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAuth()
  }

  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state)
  }
}
