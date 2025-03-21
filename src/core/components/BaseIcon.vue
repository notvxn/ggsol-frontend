<script setup lang="ts">
import { computed, defineComponent, h } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
})

const icons = import.meta.glob('@/assets/svg/**/*.svg', { eager: true })

const iconPath = computed(() => {
  const path = `/src/assets/svg/${props.name}.svg`
  return icons[path] || null
})

// Create a fallback component
const FallbackIcon = defineComponent({
  render() {
    return h('div', { class: 'flex-shrink-0 w-6 h-6 bg-gray-200 rounded' })
  },
})
</script>

<template>
  <component :is="iconPath ? iconPath : FallbackIcon" class="flex-shrink-0 fill-current" />
</template>
