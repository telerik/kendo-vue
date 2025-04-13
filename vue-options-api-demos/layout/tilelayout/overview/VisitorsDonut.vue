<template>
     <Chart
      :style="{
        height: '100%'
      }"
    >
      <ChartSeries>
        <ChartSeriesItem
          :type="'donut'"
          :dataItems="dataItems"
          :categoryField="'type'"
          :field="'value'"
        />
      </ChartSeries>
      <ChartLegend :position="'bottom'" :visible="true" />
    </Chart>
</template>
<script>
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

export default {
    components: {
        Chart,
        ChartLegend,
        ChartSeries,
        ChartSeriesItem,
    },
    props: {
        dataItems: Array
    }
}
</script>