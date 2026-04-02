<script setup lang="ts">
import { computed } from 'vue';

import { cn } from '../../utils/tailwind.utils';
import { type AppInputProps, appInputVariants } from '.';

const props = withDefaults(defineProps<AppInputProps>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
}>();

const inputState = computed(() => (props.error ? 'error' : 'default'));
</script>

<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :autocomplete="autocomplete"
    :class="cn(appInputVariants({ state: inputState }))"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @blur="emit('blur', $event)"
    @focus="emit('focus', $event)"
  />
</template>
