import { EventEmitter } from 'events'
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import { Router } from '@angular/router'


import { environment as ENV } from '../../../environments/environment'

const API_URL = ENV.API_URL

@Injectable()
export class Server {
  private ee
  public request$$

  constructor (
    private http: HttpClient,
    private router: Router
  ) {
    this.ee = new EventEmitter()
    this.request$$ = Observable.fromEvent(this.ee, 'data')

    // Observable of all requests headed to the server
    this.request$$.subscribe(req$ => {
      req$.subscribe(
        (res) => { return },
        (error) => {
          const { message, status } = error.error

          if (status === 401 ||
            (status === 500 && error.message === 'StandardError: Not logged in')) {
            window.localStorage.removeItem('$LoopBack$accessTokenId')
            window.localStorage.removeItem('$LoopBack$currentUserId')
            window.localStorage.removeItem('user')
            this.router.navigate(['/login'])
          }
        }
      )
    })
  }

  _getOptions () {
    const authorization = window.localStorage.getItem('$LoopBack$accessTokenId')
    const headers = authorization
      ? new HttpHeaders({ authorization })
      : new HttpHeaders({})
    return { headers }
  }

  _emit (request$) {
    request$ = request$.share()
    this.ee.emit('data', request$)
    return request$
  }

  get (url, options?) {
    url = `${API_URL}${url}`
    if (options) {
      url += '?' + Object.keys(options)
        .map(key => `${key}=${encode(options[key])}`)
        .join('&')
    }
    return this._emit(this.http.get(url, this._getOptions()))
  }

  post (url, data) {
    return this._emit(
      this.http.post(`${API_URL}${url}`, data, this._getOptions())
    )
  }

  put (url, data) {
    return this._emit(
      this.http.put(`${API_URL}${url}`, data, this._getOptions())
    )
  }

  del (url) {
    return this._emit(
      this.http['delete'](`${API_URL}${url}`,this._getOptions())
    )
  }
}

function encode (v) {
  if (v == null) {
    return v
  }
  if (v instanceof Date) {
    return encodeURIComponent(v.toString())
  }
  if (typeof v === 'object') {
    return encodeURIComponent(JSON.stringify(v))
  }
  return encodeURIComponent(v)
}
