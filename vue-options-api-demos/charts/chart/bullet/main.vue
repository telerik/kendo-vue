<template>
  <div>
    <Chart :style="{ height: '120px' }">
      <ChartTitle :text="'Temperature [&deg;C]'" />
      <ChartSeries>
        <ChartSeriesItem :type="'bullet'" :color="'#fff'" :data-items="temp" />
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
        <template v-slot:tooltipRender="{ props }">
          <span>
            Maximum: {{ props.point.value.target }}
            <br />
            Average: {{ props.point.value.current }}
          </span>
        </template>
      </ChartTooltip>
    </Chart>

    <Chart :style="{ height: '120px' }">
      <ChartTitle :text="'Humidity [%]'" />
      <ChartSeries>
        <ChartSeriesItem
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
        <template v-slot:tooltipRender="{ props }">
          <span>
            Maximum: {{ props.point.value.target }}
            <br />
            Average: {{ props.point.value.current }}
          </span>
        </template>
      </ChartTooltip>
    </Chart>

    <Chart :style="{ height: '120px' }">
      <ChartTitle :text="'Atmospheric pressure [mmHg]'" />
      <ChartSeries>
        <ChartSeriesItem :type="'bullet'" :color="'#111'" :data-items="mmhg" />
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
        <template v-slot:tooltipRender="{ props }">
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
<script>
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
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      hidden: { visible: false },
      tempPlotBands: [
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
      ],
      humPlotBands: [
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
      ],
      mmhgPlotBands: [
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
      ],
      temp: [[25, 22]],
      hum: [[45, 60]],
      mmhg: [[750, 762]],
    };
  },
};
</script>
