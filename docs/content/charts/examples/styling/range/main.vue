<template>
  <Chart
    :pannable="{
      lock: 'y',
    }"
    :zoomable="{
      mousewheel: {
        lock: 'y',
      },
    }"
  >
    <ChartTitle :text="'My line chart'" />
    <ChartTooltip :format="'{0}'" />
    <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        :categories="data.categories"
        :max="20"
        :labels="{
          rotation: 'auto',
        }"
      />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        :data-items="data.series.data"
        :type="'line'"
        :line-style="'smooth'"
        :name="data.series.name"
      />
    </ChartSeries>
  </Chart>
</template>
<script setup>
import {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-vue-charts";
import { ref, onMounted } from "vue";

const data = ref({
    categories: [],
    series: {
        name: "My data over time",
        data: [],
    },
});

const baseYear = ref(2000);

onMounted(() => {
    for (let i = 0; i < 200; i++) {
        data.value.categories.push(baseYear.value + i);
        data.value.series.data.push(Math.floor(Math.random() * 200));
    }
});
</script>
