import { cva, type VariantProps } from 'class-variance-authority';
import type { EChartsOption } from 'echarts';

export const appLineChartVariants = cva('w-full', {
  variants: {
    height: {
      sm: 'h-[12rem]',
      md: 'h-[16rem]',
      lg: 'h-[22rem]',
    },
  },
  defaultVariants: {
    height: 'md',
  },
});

export interface AppLineChartSeries {
  name: string;
  data: number[];
  color: string;
}

export interface AppLineChartProps {
  series: AppLineChartSeries[];
  height?: 'sm' | 'md' | 'lg';
  yFormatter?: (val: number) => string;
}

export type AppLineChartVariants = VariantProps<typeof appLineChartVariants>;
export type { EChartsOption };
export { default as AppLineChart } from './AppLineChart.vue';
