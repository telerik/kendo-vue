<template>
  <td style="padding: 0; position: relative">
    <span style="position: absolute; top: 25px; left: 140px; z-index: 10000">
      {{ chartValue }}
    </span>
    <Chart style="height: 90px; margin-top: -20px" :transitions="false">
      <ChartArea
        :background="'#eee'"
        :opacity="0"
        :height="120"
        :margin="-40"
        :border="{ width: 0 }"
      />
      <ChartValueAxis>
        <ChartValueAxisItem
          :reverse="true"
          :max="700"
          :labels="{ visible: false }"
          :majorGridLines="{ visible: false }"
        />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :color="'pink'"
          :type="'bar'"
          :spacing="0.25"
          :data-items="firstSeries"
        />
      </ChartSeries>
    </Chart>
  </td>
</template>
<script>
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartArea,
} from "@progress/kendo-vue-charts";
import "hammerjs";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea,
  },
  props: {
    field: String,
    dataItem: Object,
    format: String,
    className: String,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    editor: String,
  },
  computed: {
    chartValue() {
      return this.$props.dataItem.UnitsInStock > 800
        ? this.$props.dataItem.UnitsInStock - 800
        : 0;
    },
    firstSeries() {
      return [this.chartValue];
    },
  },
  methods: {
    change(e) {
      this.$emit("change", e, e.target.value);
    },
  },
};
</script>
