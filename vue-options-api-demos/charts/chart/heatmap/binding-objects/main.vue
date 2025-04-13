<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        :type="'heatmap'"
        :data-items="dataItems"
        :xField="'a'"
        :yField="'b'"
      />
    </ChartSeries>
  </Chart>
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
    data() {
        return {
            dataItems: this.makeDataObjects(10, 10),
            seriesType: 'verticalLine',
        };
    },
    methods: {
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
