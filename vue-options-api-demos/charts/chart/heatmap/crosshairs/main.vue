<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        type="heatmap"
        :data-items="dataItems"
        :x-field="'a'"
        :y-field="'b'"
        :field="'value'"
      />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem :visible="false">
        <ChartXAxisCrosshair :width="0.5" :color="'red'">
          <ChartAxisDefaultsCrosshairTooltip />
        </ChartXAxisCrosshair>
      </ChartXAxisItem>
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem :visible="false">
        <ChartYAxisCrosshair :width="0.5" :color="'red'">
          <ChartYAxisCrosshairTooltip />
        </ChartYAxisCrosshair>
      </ChartYAxisItem>
    </ChartYAxis>
  </Chart>
</template>
<script>
import {
    Chart,
    ChartAxisDefaultsCrosshairTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisCrosshair,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisCrosshair,
    ChartYAxisCrosshairTooltip,
    ChartYAxisItem,
} from '@progress/kendo-vue-charts';

export default {
    components: {
        Chart,
        ChartAxisDefaultsCrosshairTooltip,
        ChartSeries,
        ChartSeriesItem,
        ChartXAxis,
        ChartXAxisCrosshair,
        ChartXAxisItem,
        ChartYAxis,
        ChartYAxisCrosshair,
        ChartYAxisCrosshairTooltip,
        ChartYAxisItem,
    },
    data() {
        return {
            dataItems: this.makeDataObjects(10, 10),
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
