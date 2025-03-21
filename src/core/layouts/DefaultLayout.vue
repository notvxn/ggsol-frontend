<script setup lang="ts">
import TheHeader from '@/core/components/AppHeader.vue'
import { AppSidebar } from '@/core/components/sidebar'
</script>

<template>
  <div class="flex flex-col min-h-screen h-screen w-full">
    <TheHeader class="w-full" />
    <div class="flex flex-1 overflow-hidden">
      <AppSidebar class="h-full w-64 flex-shrink-0 overflow-y-auto" />
      <main class="flex-1 p-5 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
