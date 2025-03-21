<script setup lang="ts">
import { DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal } from 'reka-ui'
import { useLocale } from '@/core/composables'
import BaseIcon from '@/core/components/BaseIcon.vue'

const { currentLocale, currentLocaleMeta, availableLocalesMeta, changeLocale } = useLocale()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger class="flex items-center justify-between px-4 py-3 text-accent-100 border border-accent-700 rounded-md">
      <div class="flex items-center gap-2.5">
        <BaseIcon :name="`locales/${currentLocale}`" class="size-6 rounded-sm" />
        <span class="font-medium">{{ currentLocaleMeta.name }}</span>
      </div>
      <BaseIcon name="chevron-down" class="size-5.5" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent :style="{ width: 'var(--reka-popper-anchor-width)' }" class="bg-accent-700 rounded-md overflow-hidden" :sideOffset="10">
        <DropdownMenuItem
          v-for="locale in availableLocalesMeta"
          :key="locale.code"
          @click="changeLocale(locale.code)"
          class="flex items-center justify-between px-4 py-3 gap-2 font-medium text-accent-100 cursor-pointer"
          :class="{ 'text-accent-50! bg-accent-600': locale.code === currentLocale }"
        >
          <div class="flex items-center gap-2.5">
            <BaseIcon :name="`locales/${locale.code}`" class="size-6 rounded-sm" />
            <span>{{ locale.name }}</span>
          </div>

          <div v-if="locale.code === currentLocale">
            <BaseIcon name="tick" class="size-5.5" />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
