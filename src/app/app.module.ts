// Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule, Title } from '@angular/platform-browser'
import { CustomFormsModule } from 'ng2-validation'
import { EffectsModule } from '@ngrx/effects'
import { FormsModule } from '@angular/forms'
import { InlineSVGModule } from 'ng-inline-svg'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PreloadAllModules, RouterModule } from '@angular/router'

// State
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './app.store'
import { UserEffects } from './_shared/reducers/user/user.effects'

// Main Components
import { MainComponentsModule } from './_shared/modules/main-components/index'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

import { DragulaModule } from 'ng2-dragula'


const mainComponents = [
  AppComponent,
  LoginComponent,
  RegisterComponent
]

// Bundles
import { apiServices } from './_shared/api'
import { sharedServices } from './_shared/services'

// Routes
import { routes } from './app.routes'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { UrlTree, DefaultUrlSerializer, UrlSerializer } from '@angular/router'
import { CustomerModule } from './customer/index'
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component'
export class CustomUrlSerializer implements UrlSerializer {
  parse (url: any): UrlTree {
    const dus = new DefaultUrlSerializer()
    return dus.parse(url)
  }

  serialize (tree: UrlTree): any {
    const dus = new DefaultUrlSerializer()
    const path = dus.serialize(tree)
    // replace '+' char in the url
    return path.replace(/%2B|[+]/, ' ')
  }
}

// Pipes

@NgModule({
  declarations: [
    ...mainComponents
  ],
  imports: [
    // ng modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // routing
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    // ngrx modules
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      UserEffects
    ]),
    StoreRouterConnectingModule,
    // 3rd party modules
    NgbModule.forRoot(),
    InlineSVGModule,
    CustomFormsModule,
    DragulaModule,
    // app modules
    MainComponentsModule
  ],
  providers: [
    Title,
    ...apiServices,
    ...sharedServices,
    { provide: UrlSerializer, useClass: CustomUrlSerializer }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
