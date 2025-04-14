<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :data-items="seriesData"
          :labels="{
            visible: true,
            visual: labelVisual,
          }"
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
import { Group, Path } from '@progress/kendo-drawing';

export default {
  components: {
    Chart,
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
