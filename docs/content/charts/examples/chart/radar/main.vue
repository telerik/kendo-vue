<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartTitle text="Market Value of Major Banks /bln/" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'radarLine'"
          :data-items="radarData"
          :field="'pre'"
          :category-field="'name'"
          :name="'Market value as of 2007'"
        />
        <ChartSeriesItem
          :type="'radarLine'"
          :data-items="radarData"
          :field="'post'"
          :category-field="'name'"
          :name="'Market value as of 2009'"
        />
      </ChartSeries>
      <ChartValueAxis>
        <ChartValueAxisItem
          :labels="{
            format: 'C0',
          }"
        />
      </ChartValueAxis>
      <ChartLegend :position="'bottom'" />
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
} from "@progress/kendo-vue-charts";
import data from "./radar-data.json";
import { ref } from 'vue';

const radarData = ref(data);
</script>
