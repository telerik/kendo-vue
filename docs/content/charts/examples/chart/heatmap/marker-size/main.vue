<template>
  <div>
    <div class="example-config d-flex">
      <div class="col-12 col-md-12">
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
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
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

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesMarkers,
    ChartXAxis,
    ChartXAxisItem,
    ChartTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { RadioGroup } from '@progress/kendo-vue-inputs';

const makeDataObjects = (rows, cols) => {
    const data = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        Array.from(Array(cols)).forEach((_, colIndex) => {
            data.push({
                a: `А${rowIndex + 1}`,
                b: `B${colIndex + 1}`,
                value: cols + rowIndex * colIndex,
            });
        });
    }
    return data;
};

const dataItems = ref(makeDataObjects(10, 10));
const size = ref(0);
const sizes = [
    { label: 'Fixed spacing', value: 0 },
    { label: 'Fixed size', value: 30 },
];

const handleSizeChange = (e) => {
    size.value = e.value;
};
</script>
