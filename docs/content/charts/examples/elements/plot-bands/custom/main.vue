<template>
  <div>
    <Chart @render="onRender">
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
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
        <ChartSeriesItem
          :name="'Series'"
          :data-items="series"
          :type="'column'"
          :color="'rgb(255, 196, 165)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { Path, Group, Text } from '@progress/kendo-drawing';
import { ref } from 'vue';

const categories = ref(['A', 'B', 'C']);
const series = ref([1, 2, 3]);
const plotValue = ref(3);

const pattern = {
    type: 'dots',
    background: 'rgb(230, 120, 80)',
    radius: 6,
    gap: 4,
};

const onRender = (args) => {
    const chart = args.target.chartInstance();
    if (!chart) {
        return;
    }

    const valueAxis = chart.findAxisByName('valueAxis');
    const categoryAxis = chart.findAxisByName('categoryAxis');

    const valueSlot = valueAxis.slot(plotValue.value);
    const range = categoryAxis.range();
    const categorySlot = categoryAxis.slot(range.min, range.max);

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
    group.append(line, label);

    chart.surface.draw(group);
};
</script>
