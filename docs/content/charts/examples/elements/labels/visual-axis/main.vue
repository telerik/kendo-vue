<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartValueAxis>
        <ChartValueAxisItem
          :labels="{
            visible: true,
            visual: labelVisual,
          }"
        />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :name="'Series'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { Group, Path } from '@progress/kendo-drawing';
import { ref } from 'vue';

const seriesData = ref([2034, 40124, 45234, 30234, 50234]);

function labelVisual(e) {
    const defaultLabel = e.createVisual();

    if (e.value < 40000) {
        return defaultLabel;
    }

    const path = new Path({
        stroke: {
            color: 'red',
            width: 1,
        },
    });
    const bbox = defaultLabel.bbox();
    path.moveTo(bbox.bottomLeft()).lineTo(bbox.bottomRight());
    const group = new Group();
    group.append(defaultLabel, path);
    return group;
}
</script>
