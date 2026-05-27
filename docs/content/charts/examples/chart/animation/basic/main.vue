<template>
  <div>
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '16px',
      }"
    >
      <KLabel :editor-id="'animations-switch'">Animate on render:</KLabel>
      <Switch
        id="animations-switch"
        :checked="transitions"
        @change="handleTransitionsChange"
      />
    </div>
    <div :style="{ minHeight: '400px' }">
      <Chart v-if="mounted" :key="nonce" :transitions="transitions">
        <ChartCategoryAxis>
          <ChartCategoryAxisItem :categories="categories" />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            :type="'column'"
            :data-items="data"
            :name="'Revenue'"
          />
        </ChartSeries>
      </Chart>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-vue-charts';
import { Switch } from '@progress/kendo-vue-inputs';
import { Label as KLabel } from '@progress/kendo-vue-labels';

const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
const data = [100, 180, 150, 220];

const transitions = ref(true);
const mounted = ref(true);
const nonce = ref(0);

const handleTransitionsChange = (event) => {
  transitions.value = event.value;
  mounted.value = false;
  nonce.value += 1;
  setTimeout(() => {
    mounted.value = true;
  }, 200);
};
</script>
