<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :visible="false" />
      <ChartTitle text="Cash flow" />
      <ChartSeriesDefaults :visual="visualDefinition" />
      <ChartValueAxis>
        <ChartValueAxisItem>
          <ChartValueAxisLabels format="c0" />
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          type="column"
          name="HL Mountain Rear Weel"
          :data-items="waterfallData"
          :color="pointColor"
          field="amount"
          categoryField="period"
          summaryField="summary"
        >
          <ChartSeriesLabels position="insideEnd" format="C0" />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartValueAxisLabels,
    ChartSeriesDefaults,
    ChartSeriesLabels,
} from '@progress/kendo-vue-charts';
import { Path, LinearGradient, Group } from '@progress/kendo-drawing';
import data from './waterfall-data.json';

const waterfallData = data;

const createColumn = (rect, color) => {
    const origin = rect.origin;
    const bottomRight = rect.bottomRight();
    const radiusX = rect.width() / 2;
    const radiusY = radiusX / 3;
    const gradient = new LinearGradient({
        stops: [
            { offset: 0, color },
            { offset: 0.5, color, opacity: 0.9 },
            { offset: 1, color },
        ],
    });

    const path = new Path({
        fill: gradient,
        stroke: { color: 'none' },
    })
        .moveTo(origin.x, origin.y)
        .lineTo(origin.x, bottomRight.y)
        .lineTo(origin.x + rect.width(), bottomRight.y)
        .lineTo(bottomRight.x, origin.y)
        .arc(0, 180, radiusX, radiusY * 3, true);

    const group = new Group();
    group.append(path);
    return group;
};

const visualDefinition = (e) => createColumn(e.rect, e.options.color);

const pointColor = (point) => {
    const summary = point.dataItem.summary;
    if (summary) {
        return summary === 'total' ? '#555' : 'gray';
    }
    return point.value > 0 ? 'green' : 'red';
};
</script>
