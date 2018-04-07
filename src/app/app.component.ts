import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { Title } from '@angular/platform-browser'

import { environment as ENV } from '../environments/environment'

import {
  ConsoleCommandsService
} from './_shared/services/console-commands.service'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor (
    private consoleCommandsService: ConsoleCommandsService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit () {
    this.titleService.setTitle(`app - ${ENV.envName}`)

    // TODO: move to user/session store logic
    navigator.geolocation.getCurrentPosition((loc) => {
      const obj = {
        lat: loc.coords.latitude,
        lon: loc.coords.longitude
      }
      window.localStorage.setItem('userGeoLocation', JSON.stringify(obj))
    })

    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        // delay is needed for routerlinkactive to work
        setTimeout(() => {
          this.router.navigated = false
        })
        window.scrollTo(0, 0)
      }
    })

    // console stuff for the bees knees of
    this.consoleCommandsService.bindCommands()
  }
}
