<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'scatter'"
          :data-items="weatherData"
          :x-field="'rainfall'"
          :y-field="'windSpeed'"
        >
          <ChartSeriesLabels :format="'{1:N1} mm; {0:N1} km/h'" />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  },
  data: function () {
    return {
      weatherData: [
        { windSpeed: 16.4, rainfall: 5.4 },
        { windSpeed: 21.7, rainfall: 2 },
        { windSpeed: 25.4, rainfall: 3 },
        { windSpeed: 19, rainfall: 2 },
        { windSpeed: 10.9, rainfall: 1 },
        { windSpeed: 13.6, rainfall: 3.2 },
        { windSpeed: 10.9, rainfall: 7.4 },
        { windSpeed: 10.9, rainfall: 0 },
        { windSpeed: 10.9, rainfall: 8.2 },
        { windSpeed: 16.4, rainfall: 0 },
        { windSpeed: 16.4, rainfall: 1.8 },
        { windSpeed: 13.6, rainfall: 0.3 },
        { windSpeed: 29.9, rainfall: 0 },
        { windSpeed: 27.1, rainfall: 2.3 },
        { windSpeed: 16.4, rainfall: 0 },
      ],
    };
  },
};
</script>
