const ROLES_INDEX_ROUTE = [
  {
    name: 'ADMIN',
    indexPath: ''
  },
  {
    name: 'USER',
    indexPath: '/customer'
  }
]

export function setIndexRoute (userRoles: string) {
  const role = ROLES_INDEX_ROUTE.find(role => userRoles.toUpperCase() === role.name)
  return role ? role.indexPath : '/login'
}
