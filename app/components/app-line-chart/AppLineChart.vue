<script setup lang="ts">
import type { EChartsOption } from 'echarts';

import { cn } from '../../utils/tailwind.utils';
import { type AppLineChartProps, appLineChartVariants } from '.';

const props = withDefaults(defineProps<AppLineChartProps>(), {
  height: 'md',
  yFormatter: (v: number) => v.toFixed(4),
});

const heightPx = computed(() => {
  const map: Record<string, number> = { sm: 120, md: 160, lg: 220 };
  return map[props.height ?? 'md'] ?? 160;
});

const option = computed<EChartsOption>(() => ({
  backgroundColor: 'transparent',
  animation: false,
  textStyle: {
    fontFamily: 'Roboto, sans-serif',
    color: 'rgb(179 179 179)',
  },
  grid: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 52,
    containLabel: false,
  },
  xAxis: {
    type: 'category',
    show: false,
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.06)',
        type: 'dashed',
      },
    },
    axisLabel: {
      color: 'rgb(179 179 179)',
      fontSize: 10,
      formatter: props.yFormatter,
    },
  },
  series: props.series.map((s) => ({
    name: s.name,
    type: 'line',
    data: s.data,
    smooth: true,
    symbol: 'none',
    lineStyle: { color: s.color, width: 1.5 },
    itemStyle: { color: s.color },
    sampling: 'lttb',
  })),
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgb(20 24 29)',
    borderColor: 'rgba(255,255,255,0.08)',
    textStyle: { color: 'rgb(255 255 255)', fontSize: 11 },
    axisPointer: {
      lineStyle: { color: 'rgba(255,255,255,0.2)' },
    },
  },
}));
</script>

<template>
  <div :class="cn(appLineChartVariants({ height }))">
    <ClientOnly>
      <VChart
        :option="option"
        :style="{ height: `${heightPx}px`, width: '100%' }"
        :autoresize="true"
        :update-options="{ notMerge: true, lazyUpdate: true }"
      />
      <template #fallback>
        <div
          class="flex items-center justify-center rounded-md bg-on-surface/5"
          :style="{ height: `${heightPx}px` }"
        >
          <div class="flex items-center gap-x-sm text-body-x-sm text-on-surface-dim">
            <Icon
              name="material-symbols:progress-activity"
              size="1.6rem"
              class="animate-spin"
            />
            Ładowanie wykresu…
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
