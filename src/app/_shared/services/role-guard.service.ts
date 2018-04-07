import { Injectable } from '@angular/core'
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router'

@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor (
    private router: Router
  ) { }

  checkPermissions (allowedRoles = []) {
    allowedRoles = ['ADMIN', 'USER', ...allowedRoles]
    const user = JSON.parse(window.localStorage.getItem('user'))
    const usersRoles = user ? user.role : []

    if (allowedRoles.includes(usersRoles.toUpperCase())) {
      return true
    } else {
      this.router.navigate(['/403'])
      return false
    }
  }

  canSeeLink (path, routes) {
    const boaPath = routes.find((r) => r.path === path)
    const allowedRoles = ['ADMIN','USER', ...(boaPath.data ? boaPath.data.allowedRoles : [])]

    const user = JSON.parse(window.localStorage.getItem('user'))
    const usersRoles = user ? user.role : []

    return allowedRoles.includes(usersRoles.toUpperCase())
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkPermissions([...(route.data.allowedRoles || [])])
  }

  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state)
  }
}
