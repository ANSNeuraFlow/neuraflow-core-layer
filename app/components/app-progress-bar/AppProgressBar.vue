<script setup lang="ts">
import { cn } from '../../utils/tailwind.utils';
import { appProgressBarFillVariants, type AppProgressBarProps, appProgressBarTrackVariants } from '.';

withDefaults(defineProps<AppProgressBarProps>(), {
  size: 'md',
  color: 'default',
});
</script>

<template>
  <div
    :class="cn(appProgressBarTrackVariants({ size }))"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="label"
  >
    <div
      :class="cn(appProgressBarFillVariants({ color }))"
      :style="{ width: `${Math.min(Math.max(value, 0), 100)}%` }"
    />
  </div>
</template>
