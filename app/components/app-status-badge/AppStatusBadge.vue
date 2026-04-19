<script setup lang="ts">
import { cn } from '../../utils/tailwind.utils';
import { type AppStatusBadgeProps, appStatusBadgeVariants } from '.';

withDefaults(defineProps<AppStatusBadgeProps>(), {
  color: 'default',
  icon: undefined,
  spinning: false,
});
</script>

<template>
  <span :class="cn(appStatusBadgeVariants({ color }))">
    <Icon
      v-if="icon"
      :name="icon"
      size="1.2rem"
      :class="{ 'animate-spin': spinning }"
      aria-hidden="true"
    />
    {{ label }}
  </span>
</template>
