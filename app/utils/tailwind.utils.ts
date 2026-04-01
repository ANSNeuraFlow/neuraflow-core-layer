import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const tailwindMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'heading-md',
            'heading-lg',
            'heading-x-lg',
            'heading-x-huge',
            'body-x-sm',
            'body-sm',
            'body-md',
            'body-lg',
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return tailwindMerge(clsx(inputs));
}
