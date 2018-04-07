import { environment as ENV } from '../../../environments/environment'

export function logger (reducer) {
  return (state, action) => {
    let nextState
    let error

    // calculate next state based on action
    try {
      nextState = reducer(state, action)
    } catch (e) {
      error = e
    }

    if (action.type && action.type !== '@ngrx/store/update-reducers') {
      const successStyles = 'color: #09982a;'
      const errorStyles = 'color: #c30b0b;'

      const actionTypeArray = action.type.toLowerCase().split(' ')

      if (actionTypeArray.includes('success')) {
        (console as any).groupCollapsed('%c' + action.type, successStyles)
      } else if (actionTypeArray.includes('error')) {
        (console as any).groupCollapsed('%c' + action.type, errorStyles)
      } else {
        console.groupCollapsed(action.type)
      }

      console.info('%c initial state:', 'color: #9E9E9E; font-weight: bold', state)
      console.info('%c action:', 'color: #03A9F4; font-weight: bold', action.type)
      console.info('%c payload:', 'color: #03A9F4; font-weight: bold', action.payload)
      if (error) {
        console.error(
          `%c ERROR on reducer execution : ${error}`,
          'color: #F20404; font-weight: bold'
        )
      }
      console.info('%c next state:', 'color: #4CAF50; font-weight: bold', nextState)
      console.groupEnd()
    }

    return nextState
  }
}
