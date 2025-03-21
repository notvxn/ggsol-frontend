import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: 'coinflip',
    component: () => import('../views/CoinflipPage.vue')
  }
] satisfies RouteRecordRaw[]