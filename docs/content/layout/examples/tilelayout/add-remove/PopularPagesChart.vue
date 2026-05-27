<template>
  <Chart :style="{ height: '100%' }">
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="pages" :startAngle="45" />
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem
        :majorUnit="10000"
        :max="100000"
        :labels="{ step: 5 }"
      />
    </ChartValueAxis>
    <ChartArea :background="'white'" />
    <ChartSeries>
      <ChartSeriesItem
        v-for="(item, i) in visits"
        :key="i"
        :type="'column'"
        :dataItems="item.visits"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartArea,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
} from '@progress/kendo-vue-charts';

const pages = ['Home', 'Price', 'Sign-up', 'Product', 'Blog'];
const visits = [
    {
        page: 'Page',
        visits: [80000, 60000, 30000, 20000, 2000],
    },
];
</script>
