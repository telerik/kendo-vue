<template>
  <Chart
    :zoomable="{ mousewheel: { lock: 'y' } }"
    :style="{ height: '100%' }"
  >
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :baseUnitStep="'auto'" :categories="dates" />
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem
        :max="200000"
        :labels="{ step: 2 }"
      />
    </ChartValueAxis>
    <ChartArea :background="'white'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'line'"
        :markers="{ visible: false }"
        :dataItems="views"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import { computed } from 'vue';
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

const props = defineProps({
    dataItems: Array,
});

const dates = computed(() => props.dataItems.map((item) => item.date));
const views = computed(() => props.dataItems.map((item) => item.value));
</script>
