import { Component, OnInit } from '@angular/core'

import { PageTitleService } from '../../_shared/services/page-title.service'

import { DragulaService } from 'ng2-dragula/ng2-dragula'


@Component({
  selector: 'customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.scss']
})

export class CustomerIndexComponent implements OnInit {
  public orders1: string[] = ['order1','order2','order3','order4']
  public orders2: string[] = ['order1','order2','order3','order4']
  public orders3: string[] = ['order1','order2','order3','order4']
  public orders4: string[] = ['order1','order2','order3','order4']

  constructor (
    private pageTitleService: PageTitleService,
    private dragulaService: DragulaService
  ) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1))
    })
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1))
    })
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1))
    })
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1))
    })
  }

  ngOnInit () {
    this.pageTitleService.setTitle('Customer')
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className)
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '')
    }
  }

  private onDrag(args) {
    let [e, el] = args
    this.removeClass(e, 'ex-moved')
  }

  private onDrop(args) {
    let [e, el] = args
    this.addClass(e, 'ex-moved')
  }

  private onOver(args) {
    let [e, el, container] = args
    this.addClass(el, 'ex-over')
  }

  private onOut(args) {
    let [e, el, container] = args
    this.removeClass(el, 'ex-over')
  }
}
