import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/core/layouts/DefaultLayout.vue'

import { coinflipRoutes, dicesRoutes, rouletteRoutes } from '@/modules/games'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        ...coinflipRoutes,
        ...dicesRoutes,
        ...rouletteRoutes
      ]
    }
  ],
})

export default router
