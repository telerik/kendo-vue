<template>
  <div>
    <Chart
      :transitions="false"
      @drag="onDrag"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
    >
      <ChartTitle :text="'Gross domestic product growth GDP annual'" />
      <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" :start-angle="45" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          v-for="(item, idx) in series"
          :key="idx"
          :type="'line'"
          :style="'smooth'"
          :data-items="item.data"
          :field="'value'"
          :note-text-field="'extremum'"
          :name="item.name"
        />
      </ChartSeries>
    </Chart>
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-vue-charts";
import Logger from "./Logger.vue";


export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
    Logger,
  },
  data: function () {
    return {
      events: [],
      categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
      series: [
        {
          name: "India",
          data: [
            { value: 3.907, extremum: "Note" },
            { value: 7.943 },
            { value: 7.848 },
            { value: 9.284 },
            { value: 9.263 },
            { value: 9.801 },
            { value: 3.89 },
            { value: 8.238 },
            { value: 9.552 },
            { value: 6.855 },
          ],
        },
        {
          name: "Russian Federation",
          data: [
            { value: 4.743 },
            { value: 7.295 },
            { value: 7.175 },
            { value: 6.376 },
            { value: 8.153 },
            { value: 8.535 },
            { value: 5.247 },
            { value: -7.832, extremum: "Min" },
            { value: 4.3 },
            { value: 4.3 },
          ],
        },
        {
          name: "Germany",
          data: [
            { value: 0.01 },
            { value: -0.375 },
            { value: 1.161 },
            { value: 0.684 },
            { value: 3.7 },
            { value: 3.269 },
            { value: 1.083 },
            { value: -5.127 },
            { value: 3.69 },
            { value: 2.995 },
          ],
        },
        {
          name: "World",
          data: [
            { value: 1.988 },
            { value: 2.733 },
            { value: 3.994 },
            { value: 3.464 },
            { value: 4.001 },
            { value: 3.939 },
            { value: 1.333 },
            { value: -2.245 },
            { value: 4.339, extremum: "Max" },
            { value: 2.727 },
          ],
        },
      ],
    };
  },
  computed: {
    eventsList(){
      return this.events;
    }
  },
  methods: {
    onDrag() {
      this.events.unshift("Drag event triggered");
    },
    onDragStart() {
      this.events.unshift("DragStart event triggered");
    },
    onDragEnd() {
      this.events.unshift("DragEnd event triggered");
    },
  },
};
</script>
