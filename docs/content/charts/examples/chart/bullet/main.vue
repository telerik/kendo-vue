<template>
  <div>
    <Chart :style="{ height: '120px' }">
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Temperature [°C]'" />
      <ChartSeries>
        <ChartSeriesItem :name="'Temperature'" :type="'bullet'" :color="'#e62325'" :data-items="temp" />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :major-grid-lines="hidden"
          :minor-grid-lines="hidden"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem
          :major-grid-lines="hidden"
          :minor-ticks="hidden"
          :min="-10"
          :max="45"
          :plot-bands="tempPlotBands"
        />
      </ChartValueAxis>
      <ChartTooltip :render="'tooltipRender'">
        <template #tooltipRender="{ props }">
          <span>
            Maximum: {{ props.point.value.target }}
            <br />
            Average: {{ props.point.value.current }}
          </span>
        </template>
      </ChartTooltip>
    </Chart>

    <Chart :style="{ height: '120px' }">
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Humidity [%]'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Humidity'"
          :type="'bullet'"
          :color="'#0058e9'"
          :data-items="hum"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :major-grid-lines="hidden"
          :minor-grid-lines="hidden"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem
          :major-grid-lines="hidden"
          :minor-ticks="hidden"
          :min="0"
          :max="100"
          :plot-bands="humPlotBands"
        />
      </ChartValueAxis>
      <ChartTooltip :render="'tooltipRender'">
        <template #tooltipRender="{ props }">
          <span>
            Maximum: {{ props.point.value.target }}
            <br />
            Average: {{ props.point.value.current }}
          </span>
        </template>
      </ChartTooltip>
    </Chart>

    <Chart :style="{ height: '120px' }">
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Atmospheric pressure [mmHg]'" />
      <ChartSeries>
        <ChartSeriesItem :name="'Pressure'" :type="'bullet'" :color="'#111'" :data-items="mmhg" />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :major-grid-lines="hidden"
          :minor-grid-lines="hidden"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem
          :major-grid-lines="hidden"
          :minor-ticks="hidden"
          :min="715"
          :max="795"
          :plot-bands="mmhgPlotBands"
        />
      </ChartValueAxis>
      <ChartTooltip :render="'tooltipRender'">
        <template #tooltipRender="{ props }">
          <span>
            Maximum: {{ props.point.value.target }}
            <br />
            Average: {{ props.point.value.current }}
          </span>
        </template>
      </ChartTooltip>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const hidden = ref({ visible: false });

const tempPlotBands = ref([
    {
        from: 30,
        to: 45,
        color: "#e62325",
        opacity: 1,
    },
    {
        from: 15,
        to: 30,
        color: "#ffc000",
        opacity: 1,
    },
    {
        from: 0,
        to: 15,
        color: "#37b400",
        opacity: 1,
    },
    {
        from: -10,
        to: 0,
        color: "#5392ff",
        opacity: 1,
    },
]);

const humPlotBands = ref([
    {
        from: 0,
        to: 33,
        color: "#ccc",
        opacity: 0.6,
    },
    {
        from: 33,
        to: 66,
        color: "#ccc",
        opacity: 0.3,
    },
]);

const mmhgPlotBands = ref([
    {
        from: 715,
        to: 752,
        color: "#ccc",
        opacity: 0.6,
    },
    {
        from: 752,
        to: 772,
        color: "#ccc",
        opacity: 0.3,
    },
]);

const temp = ref([[25, 22]]);
const hum = ref([[45, 60]]);
const mmhg = ref([[750, 762]]);
</script>
