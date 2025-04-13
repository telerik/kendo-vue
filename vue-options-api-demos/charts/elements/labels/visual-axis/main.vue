<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem
          :labels="{
            visible: true,
            visual: labelVisual,
          }"
        />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';
import { Group, Path } from '@progress/kendo-drawing';

export default {
  components: {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [2034, 40124, 45234, 30234, 50234],
    };
  },
  methods: {
    labelVisual(e) {
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
    },
  },
};
</script>
