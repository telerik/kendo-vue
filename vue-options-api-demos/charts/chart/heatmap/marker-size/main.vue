<template>
  <div>
    <div className="example-config d-flex">
      <div className="col-12 col-md-12">
        <h6>Marker size</h6>
        <RadioGroup
          :data-items="sizes"
          :layout="'horizontal'"
          :value="size"
          @change="handleSizeChange"
        />
      </div>
    </div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'heatmap'"
          :data-items="dataItems"
          :x-field="'a'"
          :y-field="'b'"
          :field="'value'"
        >
          <ChartSeriesMarkers :type="'roundedRect'" :size="size" />
          <ChartSeriesLabels :visible="false" />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartXAxis>
        <ChartXAxisItem :labels="{ rotation: 'auto' }" />
      </ChartXAxis>
    </Chart>
  </div>
</template>
<script>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesMarkers,
    ChartXAxisItem,
    ChartXAxis,
} from '@progress/kendo-vue-charts';
import { RadioGroup } from '@progress/kendo-vue-inputs';

export default {
    components: {
        Chart,
        ChartSeries,
        ChartSeriesItem,
        ChartSeriesLabels,
        ChartSeriesMarkers,
        ChartXAxisItem,
        ChartXAxis,
        RadioGroup,
    },
    data() {
        return {
            dataItems: this.makeDataObjects(10, 10),
            size: 0,
            sizes: [
                {
                    label: 'Fixed spacing',
                    value: 0,
                },
                {
                    label: 'Fixed size',
                    value: 30,
                },
            ],
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
        handleSizeChange(e) {
            this.size = e.value;
        },
    },
};
</script>
