<template>
  <Chart :style="{ width: '800px', margin: 'auto' }">
    <ChartTitle
      :text="'Bar Chart with Patterns'"
      position="top"
      align="center"
    />
    <ChartSeries>
      <ChartSeriesItem
        v-for="(item, idx) in series"
        :key="idx"
        :type="'column'"
        :data-items="item.data"
        :name="item.name"
        :color="item.color"
        :overlay="{ gradient: 'none' }"
        :border="{ width: 0 }"
        :pattern="item.pattern"
      />
    </ChartSeries>
    <ChartLegend position="bottom" />
  </Chart>
</template>

<script>
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      series: [
        {
          name: 'Series A',
          data: [33],
          color: 'rgb(148, 236, 255)',
          pattern: {
            type: 'verticalStripes',
            background: 'rgb(75, 96, 250)',
            width: 1.2,
            gap: 12,
          },
        },
        {
          name: 'Series B',
          data: [19],
          color: 'rgb(250, 201, 187)',
          pattern: {
            type: 'crosshatch',
            background: 'rgb(172, 88, 255)',
            width: 1.2,
            gap: 12,
          },
        },
        {
          name: 'Series C',
          data: [28],
          color: 'rgb(255, 208, 223)',
          pattern: {
            type: 'diagonalStripes',
            background: 'rgb(255, 146, 184)',
            width: 1.2,
            gap: 12,
          },
        },
        {
          name: 'Series D',
          data: [13],
          color: 'rgb(255, 99, 88)',
          pattern: {
            type: 'grid',
            background: 'rgb(255, 148, 109)',
            size: 12,
            gap: 1.2,
          },
        },
        {
          name: 'Series E',
          data: [26],
          color: 'rgb(177, 193, 61)',
          pattern: {
            type: 'dots',
            background: 'rgba(255, 255, 99, 0.5)',
            radius: 7.2,
            gap: 3.6,
          },
        },
      ],
    };
  },
};
</script>
