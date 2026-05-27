<template>
  <Sparkline
    :data-items="[dataItem.target]"
    :transitions="false"
    :type="'bar'"
    :series-defaults="seriesDefaults"
  >
    <ChartArea :opacity="0" :width="180" :height="40" />
    <ChartValueAxis>
      <ChartValueAxisItem :max="max" :min="min" />
    </ChartValueAxis>
  </Sparkline>
</template>

<script setup>
import {
    Sparkline,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea,
} from "@progress/kendo-vue-charts";

defineProps({
    dataItem: Object,
});

const seriesDefaults = {
    labels: {
        background: 'none',
        visible: true,
        padding: 3,
        format: "{0}%",
    },
};
const min = 0;
const max = 130;
</script>
