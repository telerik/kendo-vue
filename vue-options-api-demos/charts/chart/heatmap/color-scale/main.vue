<template>
    <div>
      <Chart>
        <ChartSeries>
          <ChartSeriesItem
            :type="'heatmap'"
            :data-items="dataItems"
            :x-field="'a'"
            :y-field="'b'"
            :field="'value'"
            :color="color"
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
import { interpolateCividis } from 'd3-scale-chromatic';

export default {
    components: {
        Chart,
        ChartSeries,
        ChartSeriesItem,
    },
    data() {
        return {
            dataItems: this.makeDataObjects(10, 10),
        };
    },
    methods: {
        color: (e) => interpolateCividis(e.value.value / e.max),
        makeDataObjects(rows, cols) {
            const data = [];
            for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
                Array.from(Array(cols)).map((_, colIndex) => {
                    data.push({
                        a: `А${rowIndex + 1}`,
                        b: `B${colIndex + 1}`,
                        value: cols + rowIndex * colIndex,
                    });
                });
            }
            return data;
        },
    },
};
</script>
