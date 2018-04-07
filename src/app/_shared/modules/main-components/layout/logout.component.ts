import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'logout',
  template: `
    <button
      class="logout"
      type="button"
      (click)="logout.emit()"><img src="../../../../../assets/images/power.svg">
    </button>
  `,
  styles: [`
    .logout {
      position: fixed;
      top: 0;
      right: 0;
      padding:0;
      border: 2px solid #015367;
      background-color: transparent;
      color: #015367;
      border-radius: 4px;
      float: right;
      margin-right: 10px;
      margin-top: 5px;
      transition: 0.2;
    }
    .logout:hover {
      transform: scale(1.2);
    }
    .logout img {
      height: 30px;
    }
  `]
})

export class LogoutComponent {
  @Input() user

  @Output() logout: EventEmitter<any> = new EventEmitter()

  onLogout (e) {
    e.preventDefault()
    this.logout.emit()
  }
}
