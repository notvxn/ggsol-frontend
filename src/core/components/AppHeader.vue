<script setup lang="ts">
import { useLocale } from '@/core/composables'
import BaseIcon from '@/core/components/BaseIcon.vue'

const { t } = useLocale()
</script>

<template>
  <header class="flex justify-between p-4 bg-accent-900 border-b-2 border-accent-600">
    <div class="flex justify-center items-center gap-4 font-bold text-3xl tracking-wider">
      <BaseIcon name="pacman" class="size-10" />
      <p>GG<span class="text-accent-300">SOL</span></p>
    </div>
    <button class="font-medium rounded-md bg-accent-300 px-4 py-2">{{ t('common.connect_wallet') }}</button>
  </header>
</template>
