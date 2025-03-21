<script setup lang="ts">
import BaseIcon from '@/core/components/BaseIcon.vue'

defineProps({
  title: { type: String, required: true },
  iconName: { type: String, required: true },
  path: { type: String, required: true },
  active: { type: Boolean, required: true },
})
</script>

<template>
  <router-link
    class="flex items-center p-2.5 gap-2 rounded-md font-medium text-accent-100"
    :class="{ 'text-accent-50! bg-accent-700': active }"
    :to="path"
  >
    <BaseIcon class="size-7" :name="iconName" />
    <span>{{ title }}</span>
  </router-link>
</template>
