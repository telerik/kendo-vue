<template>
  <div>
    <div class="example-config">
      <label for="neckRatio">
        Neck ratio ({{ neckRation }})
        <br />
        <NumericTextBox
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
      </ChartSeries>p>
      <ChartTooltip :render="'tooltipRender'">
        <template #tooltipRender="{ props }">
          <span v-if="props">
            {{ props.point.category }}
          </span>
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
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import data from "./funnel-data.json";

const dataItems = data;
const neckRation = ref(0.3);
</script>
