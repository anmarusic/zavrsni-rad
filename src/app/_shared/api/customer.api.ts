import { Injectable } from '@angular/core'
import { Server } from '../api/server'

@Injectable()
export class CustomerService {
  constructor (
    private server: Server
  ) {}

  // byRole (role = []) {
  //   const params = '?' + role.map((r) => 'role=' + r).join('&')
  //   return this.server.get(`/v2/app/Customer/byRole${params}`)
  // }

  findById (id, filter?) {
    return this.server.get(`api/users/${id}`, filter)
  }

  register = (data) => {
    return this.server.post(`/api/signup`, data)
  }

  resetPassword (options) {
    // return this.server.post(`/v2/common/Customer/reset`, options)
  }

  update (customer) {
    // return this.server.put(`/v2/app/Customer/${customer._id}`, customer)
  }

  login (data) {
    return this.server.post(`/api/signin`, data)
  }

  logout () {
    return this.server.post(`/api/signout`, null)
  }
}
