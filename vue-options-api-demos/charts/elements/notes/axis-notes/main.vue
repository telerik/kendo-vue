<template>
  <div>
    <Chart>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :notes="categoryNotes" />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :notes="valueNotes" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :data-items="seriesData"
          :field="'value'"
        />
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
} from "@progress/kendo-vue-charts";


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
  data: function () {
    return {
      seriesData: [{ value: 2 }, { value: 4 }, { value: 3 }, { value: 1 }],
      categoryNotes: {
        data: [
          {
            value: 1,
            label: {
              text: "Max",
            },
          },
          {
            value: 3,
            label: {
              text: "Min",
            },
          },
        ],
      },
      valueNotes: {
        data: [
          {
            value: 4,
            text: "Max",
          },
          {
            value: 1,
            text: "Min",
          },
        ],
        label: {
          content: (args) => args.dataItem.text,
        },
      },
    };
  },
};
</script>
