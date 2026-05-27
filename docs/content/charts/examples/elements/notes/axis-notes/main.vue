<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :notes="categoryNotes" />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :notes="valueNotes" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :name="'Series'"
          :data-items="seriesData"
          :field="'value'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

const seriesData = ref([{ value: 2 }, { value: 4 }, { value: 3 }, { value: 1 }]);

const categoryNotes = ref({
    data: [
        {
            value: 1,
            label: {
                text: 'Max',
            },
        },
        {
            value: 3,
            label: {
                text: 'Min',
            },
        },
    ],
});

const valueNotes = ref({
    data: [
        {
            value: 4,
            text: 'Max',
        },
        {
            value: 1,
            text: 'Min',
        },
    ],
    label: {
        content: (args) => args.dataItem.text,
    },
});
</script>
