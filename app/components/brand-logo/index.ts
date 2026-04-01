import { cva, type VariantProps } from 'class-variance-authority';

export type BrandLogoSize = 'small' | 'default' | 'large';

export interface BrandLogoProps {
  size?: BrandLogoSize;
}

export const brandLogoVariants = cva('', {
  variants: {
    size: {
      small: 'w-[8.8rem]',
      default: 'w-[10rem]',
      large: 'w-[22.4rem]',
    },
  },
});

export type BrandLogoVariants = VariantProps<typeof brandLogoVariants>;

export { default as BrandLogo } from './BrandLogo.vue';
