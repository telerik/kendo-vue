<template>
  <div>
    <Chart>
      <ChartTitle :text="'March Weather Report'" />
      <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories"
          :start-angle="45"
          :axis-crossing-value="axisCrossingValue"
        />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          v-for="(item, index) in series"
          :key="index"
          :type="item.type"
          :data-items="item.data"
          :name="item.name"
          :axis="item.axis"
        />
      </ChartSeries>
      <ChartValueAxis>
        <ChartValueAxisItem
          v-for="(item, index) in valueAxis"
          :key="index"
          :name="item.name"
          :min="item.min"
          :max="item.max"
        />
      </ChartValueAxis>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      series: [
        {
          type: 'line',
          data: [
            6, 10, 10, 10, 10, 9, 5, 5, 10, 8, 8, 5, 8, 11, 9, 15, 20, 23, 24,
            21, 21, 20, 22, 22, 20, 18, 16, 15, 20, 13.2, 18,
          ],
          name: 'Max. Temperature [&deg;C]',
          color: '#ff1c1c',
          axis: 'temp',
        },
        {
          type: 'line',
          data: [
            -5, -6, 0, -4, -3, -5.2, -5, -1.7, -1, 0, -0.4, -2, -2, -5, 4, -2,
            -4, -1, -1, 2, 4, -1, 1, 1, 4, 0, -1, 1, -2, 5.7, 5,
          ],
          name: 'Min. Temperature [&deg;C]',
          color: '#ffae00',
          axis: 'temp',
        },
        {
          type: 'area',
          data: [
            16.4, 21.7, 35.4, 19, 10.9, 13.6, 10.9, 10.9, 10.9, 16.4, 16.4,
            13.6, 13.6, 29.9, 27.1, 16.4, 13.6, 10.9, 16.4, 10.9, 24.5, 10.9,
            8.1, 19, 21.7, 27.1, 24.5, 16.4, 27.1, 29.9, 27.1,
          ],
          name: 'Wind Speed [km/h]',
          color: '#73c100',
          axis: 'wind',
        },
        {
          type: 'area',
          data: [
            5.4, 2, 5.4, 3, 2, 1, 3.2, 7.4, 0, 8.2, 0, 1.8, 0.3, 0, 0, 2.3, 0,
            3.7, 5.2, 6.5, 0, 7.1, 0, 4.7, 0, 1.8, 0, 0, 0, 1.5, 0.8,
          ],
          name: 'Rainfall [mm]',
          color: '#007eff',
          axis: 'rain',
        },
      ],
      valueAxis: [
        {
          name: 'rain',
          color: '#007eff',
          min: 0,
          max: 60,
        },
        {
          name: 'wind',
          color: '#73c100',
          min: 0,
          max: 60,
        },
        {
          name: 'temp',
          min: -30,
          max: 30,
        },
      ],
      axisCrossingValue: [32, 32, 0],
    };
  },
};
</script>
