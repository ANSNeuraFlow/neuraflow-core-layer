<script setup lang="ts">
import { cn } from '../../utils/tailwind.utils';
import type { AppSelectProps } from '.';

withDefaults(defineProps<AppSelectProps>(), {
  disabled: false,
  error: false,
  modelValue: null,
  placeholder: '',
});
const emit = defineEmits<{
  'update:modelValue': [value: string | number | null];
  change: [event: Event];
}>();

const handleChange = (event: Event) => {
  const val = (event.target as HTMLSelectElement).value;
  emit('update:modelValue', val === '' ? null : val);
  emit('change', event);
};
</script>

<template>
  <select
    :id="id"
    :name="name"
    :disabled="disabled"
    :value="modelValue !== null && modelValue !== undefined ? String(modelValue) : ''"
    :class="
      cn(
        'h-[3.6rem] w-full cursor-pointer appearance-none rounded-sm border bg-surface-container px-md text-body-md',
        'transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50',
        error ? 'border-error text-error' : 'border-outline text-on-surface',
        disabled && 'cursor-not-allowed opacity-50',
      )
    "
    @change="handleChange"
  >
    <option
      v-if="placeholder"
      value=""
      disabled
    >
      {{ placeholder }}
    </option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="String(option.value)"
    >
      {{ option.label }}
    </option>
  </select>
</template>
