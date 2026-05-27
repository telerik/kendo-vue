<template>
  <div>
    <dropdownlist
      :style="{ width: '230px' }"
      :data-items="lineStyles"
      :value="style"
      @change="onStyleChange"
    />
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Sales'"
          :type="'line'"
          :data-items="series"
          :markers="{ visible: false }"
          :line-style="style"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";

const style = ref("normal");
const lineStyles = ref(["normal", "step", "smooth"]);
const series = ref([
    20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8,
]);

const onStyleChange = (e) => {
    style.value = e.value;
};
</script>
