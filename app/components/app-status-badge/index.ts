import { cva, type VariantProps } from 'class-variance-authority';

export const appStatusBadgeVariants = cva(
  'gap-xs px-sm py-x-tiny text-body-x-sm inline-flex items-center rounded-sm font-medium',
  {
    variants: {
      color: {
        default: 'bg-on-surface/10 text-on-surface-dim',
        info: 'bg-info/10 text-info',
        accent: 'bg-accent/10 text-accent',
        success: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        error: 'bg-error/10 text-error',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);

export interface AppStatusBadgeProps {
  color?: 'default' | 'info' | 'accent' | 'success' | 'warning' | 'error';
  icon?: string;
  spinning?: boolean;
  label: string;
}

export type AppStatusBadgeVariants = VariantProps<typeof appStatusBadgeVariants>;
export { default as AppStatusBadge } from './AppStatusBadge.vue';
