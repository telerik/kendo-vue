<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :data-items="seriesData"
          :field="'value'"
          :note-text-field="'extremum'"
          :notes="notes"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';


export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [
        { value: 2 },
        { value: 4, extremum: 'Max' },
        { value: 3 },
        { value: 1, extremum: 'Min' },
      ],
      notes: {
        label: {
          position: 'outside',
        },
        line: {
          length: 20,
        },
        icon: {
          type: 'square',
        },
        position: 'bottom',
      },
    };
  },
};
</script>
