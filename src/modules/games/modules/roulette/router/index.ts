import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: 'roulette',
    component: () => import('../views/RoulettePage.vue')
  }
] satisfies RouteRecordRaw[]