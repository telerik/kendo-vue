<template>
     <Chart
      :zoomable="{
        mousewheel: {
          lock: 'y'
        },
      }"
      :style="{
        height: '100%'
      }"
    >
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :baseUnitStep="'auto'" :categories="dates" />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem
          :max="200000"
          :labels="{
            step: 2,
          }"
        />
      </ChartValueAxis>
      <ChartArea :background="'white'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :markers="{
            visible: false,
          }"
          :dataItems="views"
        />
      </ChartSeries>
    </Chart>
</template>
<script>
import {
  Chart,
  ChartArea,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-vue-charts";

export default { 
    components: {
        Chart,
        ChartArea,
        ChartSeries,
        ChartSeriesItem,
        ChartCategoryAxis,
        ChartCategoryAxisItem,
        ChartValueAxis,
        ChartValueAxisItem,
    },
    props: {
        dataItems: Array
    },
    computed: {
        dates() {
            return this.dataItems.map((item, i) => item.date);
        },
        views() {
            return this.dataItems.map((item, i) => item.value);;
        }
    }
}
</script>