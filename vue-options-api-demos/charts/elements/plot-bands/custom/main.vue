<template>
  <div>
    <Chart @render="onRender">
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories"
          :name="'categoryAxis'"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :name="'valueAxis'" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="series" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';
import { Path, Group, Text } from '@progress/kendo-drawing';


export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      categories: ['A', 'B', 'C'],
      series: [1, 2, 3],
      plotValue: 3,
    };
  },
  methods: {
    onRender(args) {
      const chart = args.target.chartInstance();
      if (!chart) {
        return;
      } // get the axes

      const valueAxis = chart.findAxisByName('valueAxis');
      const categoryAxis = chart.findAxisByName('categoryAxis'); // get the coordinates of the value at which the plot band will be rendered

      const valueSlot = valueAxis.slot(this.plotValue); // get the coordinates of the entire category axis range

      const range = categoryAxis.range();
      const categorySlot = categoryAxis.slot(range.min, range.max); // draw the plot band based on the found coordinates

      const line = new Path({
        stroke: {
          color: 'red',
          width: 3,
        },
      })
        .moveTo(valueSlot.origin.x, valueSlot.origin.y)
        .lineTo(categorySlot.topRight().x, valueSlot.origin.y);
      const label = new Text('MAX', [0, 0], {
        fill: {
          color: 'red',
        },
        font: '14px sans',
      });
      const bbox = label.bbox();
      label.position([
        categorySlot.topRight().x - bbox.size.width,
        valueSlot.origin.y - bbox.size.height,
      ]);
      const group = new Group();
      group.append(line, label); // draw on the surface

      chart.surface.draw(group);
    },
  },
};
</script>
