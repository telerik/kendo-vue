<template>
  <div>
    <div className="example-config">
      <label htmlFor="neckRatio"
        >Neck ratio ({{neckRation}})
        <br />
        <numeric
          v-model="neckRation"
          :spinners="true"
          :min="0"
          :max="5"
          :step="0.1"
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
          :neck-ratio="neckRation"
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
import { NumericTextBox } from "@progress/kendo-vue-inputs";
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
    numeric: NumericTextBox,
  },
  data: function () {
    return {
      dataItems: data,
      neckRation: 0.3,
    };
  },
};
</script>