<script setup lang="ts">
import { computed } from 'vue';

import { cn } from '../../utils/tailwind.utils';
import type { AppSelectProps } from '.';

const props = withDefaults(defineProps<AppSelectProps>(), {
  disabled: false,
  error: false,
  modelValue: null,
  placeholder: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null];
  change: [event: Event];
}>();

const localValue = computed({
  get: () => {
    return props.modelValue !== null && props.modelValue !== undefined ? String(props.modelValue) : undefined;
  },
  set: (val: string | undefined) => {
    const newVal = val === '' || val === undefined ? null : val;
    emit('update:modelValue', newVal);
    // Emit 'change' for vee-validate reactivity
    const evt = new Event('change', { bubbles: true });
    Object.defineProperty(evt, 'target', { writable: false, value: { value: newVal } });
    emit('change', evt);
  },
});
</script>

<template>
  <SelectRoot
    v-model="localValue"
    :disabled="disabled"
    :name="name"
  >
    <SelectTrigger
      :id="id"
      :class="
        cn(
          'flex h-[3.6rem] w-full cursor-pointer items-center justify-between rounded-lg border bg-surface-container px-md text-body-md shadow-sm',
          'outline-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50',
          error ? 'border-error text-error' : 'border-outline text-on-surface hover:border-on-surface/30',
          disabled && 'cursor-not-allowed opacity-50',
          !localValue && 'text-on-surface-dim',
        )
      "
    >
      <SelectValue :placeholder="placeholder" />
      <SelectIcon>
        <Icon
          name="material-symbols:expand-more-rounded"
          size="2rem"
          class="text-on-surface-dim transition-transform duration-300 data-[state=open]:rotate-180"
        />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="SelectContent relative z-[100] max-h-[30rem] overflow-hidden rounded-xl border border-on-surface/10 bg-surface/90 shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl"
        position="popper"
        :side-offset="8"
        :style="{ width: 'var(--reka-select-trigger-width, var(--radix-select-trigger-width))' }"
      >
        <!-- Glassmorphism Ambient Orbs -->
        <div
          class="pointer-events-none absolute -left-10 -top-10 h-[100px] w-[100px] rounded-full bg-info/10 blur-2xl transition-colors duration-500"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-10 -right-10 h-[100px] w-[100px] rounded-full bg-accent/10 blur-2xl transition-colors duration-500"
          aria-hidden="true"
        />
        <div
          class="noise-overlay"
          aria-hidden="true"
        />

        <SelectScrollUpButton
          class="py-xs relative z-10 flex cursor-default items-center justify-center text-on-surface-dim hover:text-on-surface"
        >
          <Icon
            name="material-symbols:expand-less-rounded"
            size="2rem"
          />
        </SelectScrollUpButton>

        <SelectViewport class="p-xs relative z-10 flex flex-col gap-[0.2rem]">
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="String(option.value)"
            class="relative flex w-full cursor-pointer select-none items-center rounded-lg py-sm pl-[3.2rem] pr-md text-body-md text-on-surface outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-on-surface/10 data-[state=checked]:bg-accent/10 data-[state=checked]:font-medium data-[state=checked]:text-accent data-[disabled]:opacity-50"
          >
            <span class="absolute left-sm flex h-full items-center justify-center">
              <SelectItemIndicator>
                <Icon
                  name="material-symbols:check-rounded"
                  size="1.6rem"
                />
              </SelectItemIndicator>
            </span>
            <SelectItemText>{{ option.label }}</SelectItemText>
          </SelectItem>
        </SelectViewport>

        <SelectScrollDownButton
          class="py-xs relative z-10 flex cursor-default items-center justify-center text-on-surface-dim hover:text-on-surface"
        >
          <Icon
            name="material-symbols:expand-more-rounded"
            size="2rem"
          />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style scoped>
@keyframes slideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideUpAndFade {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
}

.SelectContent {
  transform-origin: top center;
}

.SelectContent[data-state='open'] {
  animation: slideDownAndFade 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.SelectContent[data-state='closed'] {
  animation: slideUpAndFade 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
