import type { RouteRecordRaw } from 'vue-router'
import { homeRoutes } from './home.routes'
import { errorRoutes } from './error.routes'

export const routes: RouteRecordRaw[] = [...homeRoutes, ...errorRoutes]
