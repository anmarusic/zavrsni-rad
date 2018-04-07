import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

export const getState = (store) => {
  let _state: any
  store.take(1).subscribe((state) => _state = state)
  return _state
}


@Injectable()
export class ConsoleCommandsService {
  constructor (
    private store: Store<any>
  ) {}

  private dumpState () {
    return getState(this.store)
  }

  bindCommands () {
    window['app'] = {
      dumpState: () => this.dumpState()
    }
  }
}
