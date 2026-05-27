<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :notes="{ data, label: { position } }" />
      </ChartValueAxis>
    </Chart>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Chart, ChartValueAxis, ChartValueAxisItem } from "@progress/kendo-vue-charts";

const data = ref([{ value: 1, label: { text: "Foo" } }]);
const position = ref("outside");
</script>
