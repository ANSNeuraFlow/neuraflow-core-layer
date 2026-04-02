import { cva, type VariantProps } from 'class-variance-authority';

export const appCardVariants = cva('bg-surface-container rounded-md', {
  variants: {
    padding: {
      none: '',
      sm: 'p-md',
      md: 'p-x-lg',
      lg: 'p-xx-lg',
      xl: 'p-xxx-lg',
    },
    border: {
      true: 'border border-on-surface/8',
      false: '',
    },
    shadow: {
      none: '',
      sm: 'shadow-sm shadow-black/20',
      md: 'shadow-md shadow-black/20',
    },
  },
  defaultVariants: {
    padding: 'lg',
    border: false,
    shadow: 'none',
  },
});

export interface AppCardProps {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md';
}

export type AppCardVariants = VariantProps<typeof appCardVariants>;
export { default as AppCard } from './AppCard.vue';
