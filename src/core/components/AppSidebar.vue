<script setup lang="ts">
import BaseIcon from '@/core/components/BaseIcon.vue'

interface Route {
  title: string
  iconName: string
  path: string
}

const routeGroups: Route[][] = [
  [
    { title: 'Дайсы', iconName: 'dice', path: '/' },
    { title: 'Монетка', iconName: 'coin', path: '/coinflip' },
    { title: 'Рулетка', iconName: 'roulette', path: '/roulette' },
  ],

  [
    { title: 'Лидеры', iconName: 'trophy', path: '/leaderboard' },
    { title: 'Бонусы', iconName: 'gift', path: '/bonuses' },
    { title: 'Рефералка', iconName: 'people', path: '/partners' },
  ],
]
</script>

<template>
  <aside class="flex flex-col justify-between px-2 py-4 bg-accent-900 border-r-2 border-accent-600">
    <div class="flex flex-col">
      <nav class="flex flex-col" v-for="(routes, index) in routeGroups" :key="index">
        <router-link
          class="flex items-center p-2.5 gap-2 rounded-md font-semibold text-accent-100"
          :class="{ 'text-accent-50! bg-accent-700': $route.path === route.path }"
          v-for="route in routes"
          :to="route.path"
          :key="route.path"
        >
          <BaseIcon class="size-7" :name="route.iconName" />
          <span class="sidebar__nav-item-text">{{ route.title }}</span>
        </router-link>

        <div v-if="index < routeGroups.length - 1" class="h-1 w-[30%] my-3 mx-auto rounded-b-full bg-accent-800" />
      </nav>
    </div>

    <div class="sidebar__footer"></div>
  </aside>
</template>
