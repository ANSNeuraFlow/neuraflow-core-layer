<script setup lang="ts">
import { cn } from '../../utils/tailwind.utils';
import { type AppCardProps, appCardVariants } from '.';

withDefaults(defineProps<AppCardProps>(), {
  padding: 'lg',
  border: false,
  shadow: 'none',
});
</script>

<template>
  <div :class="cn(appCardVariants({ padding, border, shadow }))">
    <slot />
  </div>
</template>
