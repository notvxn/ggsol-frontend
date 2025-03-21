<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
})

const icon = defineAsyncComponent(() => import(`@/assets/svg/${props.name}.svg`))
</script>

<template>
  <component :is="icon" class="flex-shrink-0 fill-current" />
</template>
