<template>
  <div>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="lineStyles"
      :value="lineStyle"
      @change="setLineStyle"
    />
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'scatterLine'"
          :data-items="scatterData"
          :line-style="lineStyle"
          :markers="{ visible: false }"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-vue-charts";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import data from "./scatter-line-style-data.json";
import { ref } from 'vue';

const scatterData = ref(data);
const lineStyles = ref(["normal", "smooth"]);
const lineStyle = ref("normal");

const setLineStyle = (e) => {
    lineStyle.value = e.value;
};
</script>
