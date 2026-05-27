<template>
  <div>
    <div class="example-config">
      <label for="neckRatio">
        Dynamic Slope
        <input
          :style="{ marginLeft: 5, marginRight: 5 }"
          type="checkbox"
          v-model="dynamicSlope"
        />
      </label>
      <label for="neckRatio">
        Dynamic Height
        <input
          :style="{ marginLeft: 5, marginRight: 5 }"
          type="checkbox"
          v-model="dynamicHeight"
        />
      </label>
    </div>
    <Chart :style="{ margin: '0 auto', width: 300 }">
      <ChartTitle :text="'Sales funnel'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'funnel'"
          :data-items="dataItems"
          :category-field="'stat'"
          :field="'count'"
          :color-field="'color'"
          :dynamic-slope="dynamicSlope"
          :dynamic-height="dynamicHeight"
        >
          <ChartSeriesLabels
            :color="'white'"
            :background="'none'"
            :format="'N0'"
          />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartTooltip :render="'tooltipRender'">
        <template #tooltipRender="{ props }">
          <span v-if="props">
            {{ props.point.category }}
          </span>pan>
        </template>
      </ChartTooltip>
      <ChartLegend :position="'bottom'" />
    </Chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
} from "@progress/kendo-vue-charts";
import data from "./funnel-data.json";

const dataItems = data;
const dynamicSlope = ref(false);
const dynamicHeight = ref(false);
</script>
