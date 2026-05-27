<template>
  <div>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
      <div
        class="example-config"
        :style="{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
        }"
      >
        <KButton
          :theme-color="'primary'"
          :icon="'play-sm'"
          @click="play"
          :disabled="isPlaying"
        >
          Play
        </KButton>
        <KButton :icon="'pause-sm'" @click="pause" :disabled="!isPlaying">
          Pause
        </KButton>
      </div>
    </div>

    <StockChart
      :key="chartKey"
      :style="{ height: '500px' }"
      :transitions="false"
    >
      <ChartTitle :text="'The Boeing Company\nNYSE:BA'" />
      <ChartLegend :visible="false" />

      <ChartSeries>
        <ChartSeriesItem
          :type="'candlestick'"
          :open-field="'Open'"
          :high-field="'High'"
          :low-field="'Low'"
          :close-field="'Close'"
          :category-field="'Date'"
          :data-items="stockData"
        />
      </ChartSeries>

      <ChartNavigator>
        <ChartNavigatorSelect
          :from="fixedNavigatorFrom"
          :to="fixedNavigatorTo"
        />
        <ChartNavigatorSeries>
          <ChartNavigatorSeriesItem
            :type="'area'"
            :field="'Close'"
            :category-field="'Date'"
            :data-items="stockData"
          />
        </ChartNavigatorSeries>
      </ChartNavigator>
    </StockChart>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import {
  StockChart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartNavigator,
  ChartNavigatorSelect,
  ChartNavigatorSeries,
  ChartNavigatorSeriesItem,
} from '@progress/kendo-vue-charts';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import initialStockData from './stock-data';

const stockData = ref([...initialStockData]);
const isPlaying = ref(true);
const chartKey = ref(0);

const fixedNavigatorFrom = new Date('2021-01-01');
const fixedNavigatorTo = new Date('2023-06-01');

let intervalId = null;

const randomValue = (max) =>
  Number.parseFloat((Math.random() * max).toFixed(2));

const increaseMonth = (date) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + 1);
  return result;
};

const generateCandlestick = (date) => {
  const open = randomValue(60);
  const close = randomValue(60);
  const high = Math.max(open, close) + randomValue(5);
  const low = Math.min(open, close) - randomValue(5);

  return {
    Date: new Date(date),
    Open: open,
    Close: close,
    High: high,
    Low: Math.max(0, low),
    Volume: Math.floor(Math.random() * 2000000000),
  };
};

const refreshChart = () => {
  chartKey.value += 1;
};

const play = () => {
  isPlaying.value = true;
};

const pause = () => {
  isPlaying.value = false;
};

watch(
  isPlaying,
  (playing) => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }

    if (!playing) {
      return;
    }

    intervalId = setInterval(() => {
      const last = stockData.value.at(-1);
      if (!last) return;

      stockData.value = [
        ...stockData.value,
        generateCandlestick(increaseMonth(last.Date)),
      ];

      refreshChart();
    }, 1000);
  },
  { immediate: true }
);

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
</script>
