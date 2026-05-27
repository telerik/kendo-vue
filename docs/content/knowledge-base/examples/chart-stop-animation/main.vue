<template>
  <div>
    <h3>Transitions: {{ transitions }}</h3>
    <KendoButton @click="toggleTransitions"> Toggle Transitions </KendoButton>

    <Chart :transitions="transitions">
      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";
import { Button as KendoButton } from "@progress/kendo-vue-buttons";
import { ref, onMounted } from "vue";

const transitions = ref(true);
const seriesData = ref([1, 2, 3, 5]);

onMounted(() => {
  setInterval(() => {
    seriesData.value = seriesData.value.map(() =>
      Math.floor(Math.random() * 10)
    );
  }, 1500);
});

function toggleTransitions() {
  transitions.value = !transitions.value;
}
</script>
