import { cva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

export const appButtonVariants = cva(
  [
    'inline-flex items-center justify-center gap-x-sm',
    'font-roboto font-medium text-body-md',
    'rounded-sm transition-colors duration-short',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: 'bg-accent text-on-surface-inverted hover:bg-accent/80 active:bg-accent/70',
        secondary: [
          'bg-surface-container text-on-surface border border-on-surface/10',
          'hover:bg-on-surface/5 active:bg-on-surface/10',
        ].join(' '),
        ghost: 'bg-transparent text-on-surface hover:bg-on-surface/5 active:bg-on-surface/10',
        danger: 'bg-error text-on-surface-inverted hover:bg-error/80 active:bg-error/70',
        destructive: 'bg-error text-on-surface-inverted hover:bg-error/80 active:bg-error/70',
        link: 'bg-transparent text-accent hover:text-accent/80 underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-[3.2rem] px-md text-body-sm',
        md: 'h-[4rem] px-x-lg',
        lg: 'h-[4.8rem] px-xx-lg text-body-lg',
        full: 'h-[4rem] px-x-lg w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface AppButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'full';
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  class?: ClassValue;
}

export type AppButtonVariants = VariantProps<typeof appButtonVariants>;
export { default as AppButton } from './AppButton.vue';
