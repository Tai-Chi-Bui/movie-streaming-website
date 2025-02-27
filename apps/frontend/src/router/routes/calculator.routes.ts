import type { RouteRecordRaw } from 'vue-router'

export const calculatorRoutes: RouteRecordRaw[] = [
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('@/views/CalculatorView.vue'),
    meta: {
      title: 'Calculator',
      requiresAuth: false,
    },
  },
]
