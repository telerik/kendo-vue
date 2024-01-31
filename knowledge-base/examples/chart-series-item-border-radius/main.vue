<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :visible="false"> </ChartLegend>
      <ChartTitle :text="'Cash flow'" />
      <ChartSeriesDefaults :visual="visualDefinition"> </ChartSeriesDefaults>
      <ChartValueAxis>
        <ChartValueAxisItem>
          <ChartValueAxisLabels :format="'c0'" />
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :name="'HL Mountain Rear Weel'"
          :data-items="waterfallData"
          :color="pointColor"
          :field="'amount'"
          :categoryField="'period'"
          :summaryField="'summary'"
        >
          <ChartSeriesLabels :position="'insideEnd'" :format="'C0'">
          </ChartSeriesLabels>
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>
<script>
import {
  ChartSeriesLabels,
  ChartLegend,
  ChartValueAxisTitle,
  ChartValueAxisLabels,
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeriesDefaults,
} from "@progress/kendo-vue-charts";

import {
  Path,
  LinearGradient,
  geometry,
  Arc,
  Group,
} from "@progress/kendo-drawing";

import data from "./waterfall-data.json";
import "hammerjs";

function createColumn(rect, color) {
  var origin = rect.origin;
  var center = rect.center();
  var bottomRight = rect.bottomRight();
  var radiusX = rect.width() / 2;
  var radiusY = radiusX / 3;
  var gradient = new LinearGradient({
    stops: [
      {
        offset: 0,
        color: color,
      },
      {
        offset: 0.5,
        color: color,
        opacity: 0.9,
      },
      {
        offset: 0.5,
        color: color,
        opacity: 0.9,
      },
      {
        offset: 1,
        color: color,
      },
    ],
  });

  var path = new Path({
    fill: gradient,
    stroke: {
      color: "none",
    },
  })
    .moveTo(origin.x, origin.y)
    .lineTo(origin.x, bottomRight.y)
    .lineTo(origin.x + rect.width(), bottomRight.y)
    .lineTo(bottomRight.x, origin.y)
    .arc(0, 180, radiusX, radiusY * 3, true);

  var topArcGeometry = new geometry.Arc([center.x, origin.y], {
    startAngle: 0,
    endAngle: 360,
    radiusX: radiusX,
    radiusY: radiusY * 3,
  });

  var topArc = new Arc(topArcGeometry, {
    fill: {
      color: color,
    },
    stroke: {
      color: color,
    },
  });
  var group = new Group();
  group.append(path);
  return group;
}

export default {
  components: {
    ChartSeriesLabels,
    ChartLegend,
    ChartValueAxisTitle,
    ChartValueAxisLabels,
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeriesDefaults,
  },
  data: function () {
    return {
      waterfallData: data,
    };
  },
  methods: {
    visualDefinition(e) {
      return createColumn(e.rect, e.options.color);
    },
    pointColor(point) {
      let summary = point.dataItem.summary;

      if (summary) {
        return summary === "total" ? "#555" : "gray";
      }

      if (point.value > 0) {
        return "green";
      } else {
        return "red";
      }
    },
  },
};
</script>
