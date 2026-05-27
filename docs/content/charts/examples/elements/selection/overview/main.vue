<template>
  <div>
    <Chart @selectend="onSelectEnd">
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" :select="selection" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="series" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
} from '@progress/kendo-vue-charts';

const series = ref([1, 2, 3, 4]);
const selection = ref({
    from: 1,
    to: 2,
});
const categories = ref(['A', 'B', 'C', 'D']);

function onSelectEnd(args) {
    console.log(args);
}
</script>
