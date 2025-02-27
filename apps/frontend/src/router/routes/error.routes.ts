import type { RouteRecordRaw } from 'vue-router'

export const errorRoutes: RouteRecordRaw[] = [
  {
    // This path pattern matches any URL that hasn't been matched by other routes
    // The (.*) captures any characters and * makes it match multiple segments
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404 Not Found',
      requiresAuth: false,
    },
  },
]
