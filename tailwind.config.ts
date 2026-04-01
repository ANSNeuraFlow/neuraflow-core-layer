import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';

import rootFontSize from './tailwind/plugins/root-font-size';

const config = {
  content: [],
  darkMode: ['class', '.theme-dark'],
  plugins: [rootFontSize, tailwindScrollbar({ nocompatible: true })],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-md': ['2rem', { lineHeight: '2.8rem' }],
        'heading-lg': ['2.8rem', { lineHeight: '3.6rem' }],
        'heading-x-lg': ['3.6rem', { lineHeight: '4.4rem' }],
        'heading-x-huge': ['6.4rem', { lineHeight: '7.6rem' }],

        'body-x-sm': ['1.2rem', { lineHeight: '1.6rem' }],
        'body-sm': ['1.4rem', { lineHeight: '2rem' }],
        'body-md': ['1.6rem', { lineHeight: '2.4rem' }],
        'body-lg': ['1.8rem', { lineHeight: '2.8rem' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      letterSpacing: {
        'x-sm': '-0.02rem',
        sm: '-0.01rem',
        md: '0rem',
        lg: '0rem',
        'x-lg': '0.02rem',
        'xx-lg': '0.04rem',
      },
      borderRadius: {
        none: '0rem',
        'x-sm': '0.2rem',
        sm: '0.4rem',
        md: '0.8rem',
        lg: '1.6rem',
        full: '9999px',
      },
      spacing: {
        none: '0',
        'x-tiny': '0.2rem',
        tiny: '0.4rem',
        'xxxx-sm': '0.6rem',
        'xxx-sm': '0.8rem',
        'xx-sm': '1rem',
        'x-sm': '1.2rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        'x-lg': '2rem',
        'xx-lg': '2.4rem',
        'xxx-lg': '2.8rem',
        'xxxx-lg': '3.2rem',
        huge: '3.6rem',
        'x-huge': '4rem',
        'xx-huge': '4.4rem',
        'xxx-huge': '4.8rem',
        'xxxx-huge': '5.2rem',
      },
      colors: {
        current: 'currentColor',
        inherit: 'inherit',
        transparent: 'transparent',

        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-container': 'rgb(var(--color-surface-container) / <alpha-value>)',
        'surface-inverted': 'rgb(var(--color-surface-inverted) / <alpha-value>)',

        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-surface-dim': 'rgb(var(--color-on-surface-dim) / <alpha-value>)',
        'on-surface-inverted': 'rgb(var(--color-on-surface-inverted) / <alpha-value>)',

        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-dim': 'rgb(var(--color-accent-dim) / <alpha-value>)',

        info: 'rgb(var(--color-info) / <alpha-value>)',
        'info-container': 'rgb(var(--color-info-container) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        'warning-container': 'rgb(var(--color-warning-container) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        'error-container': 'rgb(var(--color-error-container) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        'success-container': 'rgb(var(--color-success-container) / <alpha-value>)',
      },
      transitionDuration: {
        short: '200ms',
        medium: '600ms',
        long: '1s',
        'x-long': '1.5s',
        'xx-long': '2s',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'carousel-slow': 'carousel 2s ease-in-out infinite',
      },
      keyframes: {
        carousel: {
          '0%': {
            transform: 'translateX(-100%)',
            width: '50%',
          },
          '100%': {
            transform: 'translateX(200%)',
            width: '50%',
          },
        },
      },
    },
  },
} satisfies Config;

export default config;
