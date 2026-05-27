<template>
  <div>
    <div class="example-config">
      <label>Aggregate: </label>
      <DropDownList
        :style="{ marginLeft: 5 }"
        :value="aggregate"
        @change="onChange"
        :data-items="aggregates"
      />
    </div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :name="'Daily Max Temperature'"
          :field="'TMax'"
          :category-field="'Date'"
          :aggregate="aggregate"
          :data-items="data"
          :color="'rgb(177, 193, 61)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :base-unit="baseUnit" />
      </ChartCategoryAxis>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { mockData } from './weather-data.js';

const data = mockData();
const baseUnit = ref('weeks');
const aggregate = ref('max');
const aggregates = ['max', 'min'];

const pattern = {
    type: 'diagonalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 10,
};

function onChange(event) {
    aggregate.value = event.value;
}
</script>
