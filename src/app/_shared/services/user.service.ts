import { Store } from '@ngrx/store'
import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
  constructor (
    private store: Store<any>
  ) { }
  saveSession (authObj): void {
    window.localStorage.setItem('$LoopBack$accessTokenId', authObj.token)
    window.localStorage.setItem('$LoopBack$currentUserId', authObj.user['_id'])
    window.localStorage.setItem('user', JSON.stringify(authObj.user))
  }

  deleteSession (): void {
    window.localStorage.removeItem('$LoopBack$accessTokenId')
    window.localStorage.removeItem('$LoopBack$currentUserId')
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('selectedRegion')
  }

  getUser () {
    let user = window.localStorage.getItem('user')
    return (user === 'undefined') ? this.deleteSession() : JSON.parse(user)
  }
}
