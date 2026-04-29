import { cva, type VariantProps } from 'class-variance-authority';

export const appInputVariants = cva(
  [
    'w-full rounded-sm font-roboto text-body-md text-on-surface',
    'bg-surface-container border border-on-surface/10',
    'px-md py-xx-sm',
    'placeholder:text-on-surface-dim',
    'outline-none transition-colors duration-short',
    'hover:border-on-surface/20',
    'focus:border-accent focus:ring-2 focus:ring-accent/15',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
  ].join(' '),
  {
    variants: {
      state: {
        default: '',
        error: ['border-error/60', 'focus:border-error focus:ring-error/15', 'hover:border-error/80'].join(' '),
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

export interface AppInputProps {
  modelValue?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date';
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  id?: string;
  name?: string;
  autocomplete?: string;
}

export type AppInputVariants = VariantProps<typeof appInputVariants>;
export { default as AppInput } from './AppInput.vue';
