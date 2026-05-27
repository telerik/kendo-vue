<template>
  <div :style="presetStyle">
    <AnimationConfigurator
      :preset="preset"
      :presets="presets"
      @preset-change="applyPreset"
    />
    <Chart :key="nonce">
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :data-items="data"
          :name="'Revenue'"
        >
          <ChartSeriesLabels />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-vue-charts';
import AnimationConfigurator from './AnimationConfigurator.vue';

const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
const data = [100, 180, 150, 220];

const presetStyles = {
  default: {},
  standard: {
    '--kendo-duration-steady': '1200ms',
    '--kendo-duration-rapid': '400ms',
    '--kendo-easing-standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  rapid: {
    '--kendo-duration-steady': '250ms',
    '--kendo-duration-rapid': '80ms',
  },
  stretchy: {
    '--kendo-duration-steady': '1400ms',
    '--kendo-duration-rapid': '500ms',
    '--kendo-easing-stretchy': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  linear: {
    '--kendo-duration-steady': '900ms',
    '--kendo-duration-rapid': '300ms',
    '--kendo-easing-linear': 'cubic-bezier(0.25, 0.25, 0.75, 0.75)',
  },
};

const presets = ['default', 'standard', 'rapid', 'stretchy', 'linear'];

const preset = ref('default');
const nonce = ref(0);

const presetStyle = computed(() => presetStyles[preset.value]);

const applyPreset = (next) => {
  preset.value = next;
  nonce.value += 1;
};
</script>
