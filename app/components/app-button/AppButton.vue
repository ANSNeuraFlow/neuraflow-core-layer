<script setup lang="ts">
import { cn } from '../../utils/tailwind.utils';
import { type AppButtonProps, appButtonVariants } from '.';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<AppButtonProps>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  type: 'button',
});
</script>

<template>
  <button
    v-bind="$attrs"
    :type="type"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    :aria-busy="loading"
    :class="cn(appButtonVariants({ variant, size }), props.class)"
  >
    <Icon
      v-if="loading"
      name="material-symbols:progress-activity"
      size="2rem"
      class="animate-spin"
      aria-hidden="true"
    />
    <slot v-else />
  </button>
</template>
