<template>
  <div>
    <Chart>
      <ChartTitle
        :text="'A Lovely Title'"
        :color="'blue'"
        :background="'#ccff00'"
        :font="'19pt sans-serif'"
      />
    </Chart>
  </div>
</template>

<script setup>
import { Chart, ChartTitle } from '@progress/kendo-vue-charts';
</script>
