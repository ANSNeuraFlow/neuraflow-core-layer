<script setup lang="ts">
import { ref } from 'vue';

import type { AppPasswordInputProps } from '.';

withDefaults(defineProps<AppPasswordInputProps>(), {
  disabled: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  blur: [event: FocusEvent];
}>();

const visible = ref(false);
</script>

<template>
  <div class="relative">
    <AppInput
      :id="id"
      :name="name"
      :type="visible ? 'text' : 'password'"
      :model-value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="error"
      :autocomplete="autocomplete"
      class="pr-[4.8rem]"
      @update:model-value="emit('update:modelValue', $event)"
      @blur="emit('blur', $event)"
    />
    <button
      type="button"
      :disabled="disabled"
      aria-label="Toggle password visibility"
      class="absolute right-md top-1/2 flex -translate-y-1/2 items-center justify-center text-on-surface-dim transition-colors duration-short hover:text-on-surface disabled:cursor-not-allowed disabled:opacity-40"
      @click="visible = !visible"
    >
      <Icon
        :name="visible ? 'material-symbols:visibility-off-outline' : 'material-symbols:visibility-outline'"
        size="2rem"
      />
    </button>
  </div>
</template>
