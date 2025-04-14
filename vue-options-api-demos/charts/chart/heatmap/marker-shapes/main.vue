<template>
    <div>
      <div className="example-config d-flex">
        <div className="col-12 col-md-12">
          <h6>Marker shape</h6>
          <RadioGroup
            :data-items="shapes"
            :layout="'horizontal'"
            :value="shape"
            @change="handleShapeChange"
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
            <ChartSeriesMarkers :type="shape" :border="{ width: 1 }" />
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
            shape: 'roundedRect',
            shapes: [
                {
                    label: 'Rectange',
                    value: 'rect',
                },
                {
                    label: 'Rounded Rectangle',
                    value: 'roundedRect',
                },
                {
                    label: 'Circle',
                    value: 'circle',
                },
                {
                    label: 'Triangle',
                    value: 'triangle',
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
        handleShapeChange(e) {
            this.shape = e.value;
        },
    },
};
</script>
