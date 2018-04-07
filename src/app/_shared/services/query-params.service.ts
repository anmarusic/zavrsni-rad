import { Injectable } from '@angular/core'
import { Location } from '@angular/common'

@Injectable()
export class QueryParamsService {
  private queryParams

  constructor (
    private location: Location
  ) { }

  setUrl (param): void {
    const [ path, params ] = this.location.path(true).split('?')
    this.queryParams = params
      ? setQueryParams(params)
      : {}

    let query = Object.assign({}, this.queryParams, param)
    query = Object.keys(query).reduce((str, val, i) => {
      const term = query[val]
      if (term) {
        if (str) str += '&'
        str += `${val}=${term}`
      }
      return str
    }, '')
    this.location.replaceState(path, query)
  }
}

function setQueryParams (params: string) {
  return params
    .split('&')
    .reduce((obj, param) => {
      const [ name, value ] = param.split('=')
      obj[name] = value
      return obj
    }, {})
}
