import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CustomFormsModule } from 'ng2-validation'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { CustomerIndexEffects }
  from './customer-index/customer-index.effects'
// import { CustomerDetailsEffects }
//   from './customer-details/customer-details.effects'

import { CustomerIndexComponent }
  from './customer-index/customer-index.component'
// import { PotentialCustomerDetailsComponent }
//   from './potential-customer-details/potential-customer-details.component'

import { routes as CustomerRoutes } from './customer.routes'

// import { reducer as detailsReducer }
//   from './customer-details/customer-details.reducer'
import { reducer as indexReducer }
  from './customer-index/customer-index.reducer'

import { DragulaModule } from 'ng2-dragula'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    FormsModule,
    NgbModule,
    CustomFormsModule,
    DragulaModule,
    EffectsModule.forFeature([
      CustomerIndexEffects,
    //   PotentialCustomerDetailsEffects
    ]),
    // StoreModule.forFeature('customerDetails', detailsReducer),
    StoreModule.forFeature('customerIndex', indexReducer)
  ],
  declarations: [CustomerIndexComponent],
  entryComponents: [],
  providers: []
})

export class CustomerModule { }
