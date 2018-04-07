import { Component, Input, Output, EventEmitter } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
  selector: 'navigation',
  template: `
  <button (click)="navigationHandler()" id="expand-navigation">{{ isOpen ? '-' : '+' }}</button>

  <section class="wrapper" [ngClass]="{ 'opened': isOpen }">
    <ul>
      <li><a href="#"><span class="fas fa-utensils"></span></a></li>
      <li><a href="#"><span class="fas fa-taxi"></span></a></li>
      <li><a href="#"><span class="fas fa-user-secret"></span></a></li>
    </ul>
  </section>

  <div (click)="closeNavigation()" class="overlay" [ngClass]="{ 'on-overlay': isOpen }"></div>
  `,
  styleUrls: ['navigation.component.scss']
})

export class NavigationComponent {

  public isOpen: boolean

  @Output() navigation: EventEmitter<any> = new EventEmitter()

    
  constructor () {
    this.isOpen = false
  }
    
  navigationHandler() {
    !this.isOpen ? this.openNavigation() : this.closeNavigation();
  }
    
  openNavigation () {
    this.isOpen = true
  }
  
  closeNavigation() {
    this.isOpen = false
  }  
}
