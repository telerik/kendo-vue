<template>
  <Chart :pannable="true" :zoomable="true" :render-аs="'canvas'">
    <ChartSeries>
      <ChartSeriesItem
        :type="'heatmap'"
        :data-items="dataItems"
        :x-field="'a'"
        :y-field="'b'"
        :field="'value'"
        :labels="{
          visible: false,
        }"
      />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem
        :min="10"
        :max="15"
        :labels="{
          rotation: 'auto',
        }"
      />
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem :min="10" :max="15" />
    </ChartYAxis>
  </Chart>
</template>
<script>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxisItem,
    ChartXAxis,
    ChartYAxisItem,
    ChartYAxis,
} from '@progress/kendo-vue-charts';

export default {
    components: {
        Chart,
        ChartSeries,
        ChartSeriesItem,
        ChartXAxisItem,
        ChartXAxis,
        ChartYAxisItem,
        ChartYAxis,
    },
    data() {
        return {
            dataItems: this.makeDataObjects(25, 25),
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
