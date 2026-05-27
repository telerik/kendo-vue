<template>
  <Chart @render="onRender">
    <template #donutCenterRenderer>
      <span><h3>22.5%</h3> of which renewables</span>
    </template>
    <ChartSeries>
      <ChartSeriesItem
        :type="'donut'"
        :data-items="dataItems"
        :category-field="'kind'"
        :field="'share'"
        :visual="visualHandler"
      >
        <ChartSeriesLabels
          :color="'#fff'"
          :background="'none'"
          :content="labelContent"
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartTooltip,
} from "@progress/kendo-vue-charts";
import data from "./power-distribution-data.json";
import { Layout, Text, geometry } from "@progress/kendo-drawing";
import { ref } from 'vue';

let center;
let radius;

const labelContent = (e) => e.category;
const visualHandler = (e) => {
    center = e.center;
    radius = e.innerRadius;
    return e.createVisual();
};

const dataItems = ref(data);

const onRender = (e) => {
    const circleGeometry = new geometry.Circle(center, radius);
    const bbox = circleGeometry.bbox();

    const heading = new Text("22.5%", [0, 0], {
        font: "28px Verdana,Arial,sans-serif",
    });

    const line1 = new Text("of which", [0, 0], {
        font: "16px Verdana,Arial,sans-serif",
    });

    const line2 = new Text("renewables", [0, 0], {
        font: "16px Verdana,Arial,sans-serif",
    });

    const layout = new Layout(bbox, {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        spacing: 5,
    });

    layout.append(heading, line1, line2);
    layout.reflow();

    e.target.surface().draw(layout);
};
</script>
