<script setup lang="ts">
import TheHeader from '@/core/components/AppHeader.vue'
import TheSidebar from '@/core/components/AppSidebar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen h-screen w-full">
    <TheHeader class="w-full" />
    <div class="flex flex-1 overflow-hidden">
      <TheSidebar class="h-full w-64 flex-shrink-0" />
      <main class="flex-1 p-5 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
