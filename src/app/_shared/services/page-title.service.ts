import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'

interface Title {
  title?: string,
  subtitle?: string
}

@Injectable()
export class PageTitleService {
  public title$: Subject<Title>

  constructor () {
    this.title$ = new Subject()
  }

  setTitle (title: string = '', subtitle: string = ''): void {
    this.title$.next({ title, subtitle })
  }

  getTitle (): Observable<Title> {
    return this.title$.asObservable()
  }

}
