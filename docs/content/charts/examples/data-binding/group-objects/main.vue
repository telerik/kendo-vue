<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        v-for="(item, index) in series"
        :key="index"
        :data-items="item.items"
        :name="item.value"
        :field="'value'"
        :category-field="'interval'"
        :type="'line'"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { groupBy } from "@progress/kendo-data-query";
import { ref, onMounted } from 'vue';

const series = ref(null);
const data = [
    { interval: 1, service: "Service 1", value: 5 },
    { interval: 2, service: "Service 1", value: 15 },
    { interval: 3, service: "Service 1", value: 10 },
    { interval: 1, service: "Service 2", value: 10 },
    { interval: 2, service: "Service 2", value: 5 },
    { interval: 3, service: "Service 2", value: 15 },
];

onMounted(() => {
    series.value = groupBy(data, [{ field: "service" }]);
});
</script>
