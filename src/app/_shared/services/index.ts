import { ConsoleCommandsService } from './console-commands.service'
import { PageTitleService } from './page-title.service'
import { UserService } from './user.service'
import { QueryParamsService } from './query-params.service'

import { AuthGuard } from './auth-guard.service'
import { RoleGuard } from './role-guard.service'

export const sharedServices = [
  ConsoleCommandsService,
  PageTitleService,
  UserService,
  QueryParamsService,
  AuthGuard,
  RoleGuard
]
