import { Routes } from '@angular/router'

import { CustomerIndexComponent }
  from './customer-index/customer-index.component'
// import { CustomerDetailsComponent } from './customer-details/customer-details.component'

export const routes: Routes = [
  { path: '', component: CustomerIndexComponent },
  // { path: ':id', component: CustomerDetailsComponent }
]
