<template>
  <div>
    <div class="example-config">
      <label for="neckRatio"
        >Dynamic Slope
        <input
          :style="{ marginLeft: 5, marginRight: 5 }"
          type="checkbox"
          v-model="dynamicSlope"
        />
      </label>
      <label for="neckRatio"
        >Dynamic Height
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
        <template v-slot:tooltipRender="{ props }">
          <span v-if="props">
            {{ props.point.category }}
          </span>
        </template>
      </ChartTooltip>
      <ChartLegend :visible="false" />
    </Chart>
  </div>
</template>
<script>
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

export default {
  components: {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,

    ChartSeriesLabels,
  },
  data: function () {
    return {
      dataItems: data,
      dynamicSlope: false,
      dynamicHeight: false,
    };
  },
};
</script>