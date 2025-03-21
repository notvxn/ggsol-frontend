<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/core/composables'

import AppSidebarNavItem from '@/core/components/sidebar/AppSidebarNavItem.vue'
import AppSidebarLangDropdown from '@/core/components/sidebar/AppSidebarLangDropdown.vue'

const { t } = useLocale()

interface Route {
  title: string
  iconName: string
  path: string
}

const routeGroups = computed<Route[][]>(() => [
  [
    { title: t('games.dices'), iconName: 'dice', path: '/dices' },
    { title: t('games.coinflip'), iconName: 'coin', path: '/coinflip' },
    { title: t('games.roulette'), iconName: 'roulette', path: '/roulette' },
  ],

  [
    { title: t('navigation.leaderboard'), iconName: 'trophy', path: '/leaderboard' },
    { title: t('navigation.bonuses'), iconName: 'gift', path: '/bonuses' },
    { title: t('navigation.referral'), iconName: 'people', path: '/partners' },
    { title: t('navigation.support'), iconName: 'help', path: '/help' },
  ],
])
</script>

<template>
  <aside class="flex flex-col justify-between px-2 py-4 bg-accent-900 border-r-2 border-accent-600">
    <div class="flex flex-col">
      <nav class="flex flex-col" v-for="(routes, index) in routeGroups" :key="index">
        <AppSidebarNavItem
          v-for="route in routes"
          :key="route.path"
          :title="route.title"
          :icon-name="route.iconName"
          :path="route.path"
          :active="$route.path === route.path"
        />

        <div class="h-1 w-[30%] my-4 mx-auto rounded-b-full bg-accent-800" />
      </nav>
    </div>

    <nav class="flex flex-col">
      <AppSidebarLangDropdown />
    </nav>
  </aside>
</template>
