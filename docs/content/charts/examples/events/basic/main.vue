<template>
  <div>
    <Chart
      :transitions="false"
      @axislabelclick="onAxisLabelClick"
      @legenditemclick="onLegendItemClick"
      @legenditemhover="onLegendItemHover"
      @noteclick="onNoteClick"
      @notehover="onNoteHover"
      @plotareaclick="onPlotAreaClick"
      @plotareahover="onPlotAreaHover"
      @render="onRender"
      @seriesclick="onSeriesClick"
      @serieshover="onSeriesHover"
    >
      <ChartTooltip :visible="true" />
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

<script setup>
import { ref, computed } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import Logger from './Logger.vue';

const events = ref([]);
const categories = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
const series = [
    {
        name: 'India',
        data: [
            { value: 3.907, extremum: 'Note' },
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
        name: 'Russian Federation',
        data: [
            { value: 4.743 },
            { value: 7.295 },
            { value: 7.175 },
            { value: 6.376 },
            { value: 8.153 },
            { value: 8.535 },
            { value: 5.247 },
            { value: -7.832, extremum: 'Min' },
            { value: 4.3 },
            { value: 4.3 },
        ],
    },
    {
        name: 'Germany',
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
        name: 'World',
        data: [
            { value: 1.988 },
            { value: 2.733 },
            { value: 3.994 },
            { value: 3.464 },
            { value: 4.001 },
            { value: 3.939 },
            { value: 1.333 },
            { value: -2.245 },
            { value: 4.339, extremum: 'Max' },
            { value: 2.727 },
        ],
    },
];

const eventsList = computed(() => events.value);

function onRender() {
    events.value.unshift('Render event triggered');
}
function onAxisLabelClick() {
    events.value.unshift('AxisLabelClick event triggered');
}
function onLegendItemClick() {
    events.value.unshift('LegendItemClick event triggered');
}
function onLegendItemHover() {
    events.value.unshift('LegendItemHover event triggered');
}
function onNoteClick() {
    events.value.unshift('NoteClick event triggered');
}
function onNoteHover() {
    events.value.unshift('NoteHover event triggered');
}
function onPlotAreaClick() {
    events.value.unshift('PlotAreaClick event triggered');
}
function onPlotAreaHover() {
    events.value.unshift('PlotAreaHover event triggered');
}
function onSeriesClick() {
    events.value.unshift('SeriesClick event triggered');
}
function onSeriesHover() {
    events.value.unshift('SeriesHover event triggered');
}
</script>
