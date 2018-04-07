import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { InlineSVGModule } from 'ng-inline-svg'

import { layoutComponents } from './layout/index'

@NgModule({
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    ...layoutComponents
  ],
  exports: [
    ...layoutComponents
  ],
  providers: []
})
export class MainComponentsModule { }
