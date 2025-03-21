import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: 'dices',
    component: () => import('../views/DicesPage.vue')
  }
] satisfies RouteRecordRaw[]