import { Routes, Route } from '@angular/router'

import { AuthGuard } from './_shared/services/auth-guard.service'
import { RoleGuard } from './_shared/services/role-guard.service'

import { LoginComponent } from './login/login.component'
import { LayoutComponent }
  from './_shared/modules/main-components/layout/layout.component'
import { RegisterComponent } from './register/register.component'

export interface ProtectedRoute extends Route {
  data?: {
    allowedRoles?: UserRole[]
  }
}

export const authProtectedRoutes: ProtectedRoute[] = [
  // ADMIN role is allowed everywhere
  {
    path: 'customer',
    component: LayoutComponent,
    loadChildren: './customer/index#CustomerModule'
  }
]

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // {
    // path: '403',
    // loadChildren: './error-pages/index#ErrorPagesModule'
  // },
  // locked routes
  {
    path: '',
    canActivateChild: [AuthGuard, RoleGuard],
    children: authProtectedRoutes
  }
]

export type UserRole = 'USER'
  | 'ADMIN'
