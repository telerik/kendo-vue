<template>
  <Sparkline
    :data-items="[dataItem.target]"
    :transitions="false"
    :type="'bar'"
    :series-defaults="seriesDefaults"
  >
    <ChartArea :opacity="0" :width="200" :height="40" />
    <ChartValueAxis>
      <ChartValueAxisItem :max="max" :min="min" />
    </ChartValueAxis>
  </Sparkline>
</template>

<script>
import {
  Sparkline,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartArea,
} from "@progress/kendo-vue-charts";
import "hammerjs";

export default {
  components: {
    Sparkline,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea,
  },
  props: {
    dataItem: Object,
  },
  data() {
    return {
      seriesDefaults: {
        labels: {
          background:'none',
          visible: true,
          padding: 3,
          format: "{0}%",
        },
      },
      min: 0,
      max: 130,
    };
  },
};
</script>
