<script setup lang="ts">
import type { AppFormFieldProps } from '.';

withDefaults(defineProps<AppFormFieldProps>(), {
  required: false,
});
</script>

<template>
  <div class="flex flex-col gap-x-tiny">
    <label
      v-if="label"
      :for="htmlFor"
      class="select-none text-body-sm font-medium text-on-surface-dim"
    >
      {{ label }}
      <span
        v-if="required"
        class="ml-x-tiny text-error"
        aria-hidden="true"
        >*</span
      >
    </label>

    <slot />

    <Transition name="fade">
      <p
        v-if="hint && !error"
        class="text-body-x-sm text-on-surface-dim"
      >
        {{ hint }}
      </p>
    </Transition>

    <Transition name="fade">
      <p
        v-if="error"
        class="text-body-x-sm text-error"
        role="alert"
        aria-live="polite"
      >
        {{ error }}
      </p>
    </Transition>
  </div>
</template>
