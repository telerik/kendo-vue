<template>
  <div>
    <Chart @selectend="onSelectEnd">
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" :min="min" :max="max" />
        <ChartCategoryAxisItem
          :categories="categories"
          :name="'navigatorAxis'"
          :labels="navigatorStep"
          :major-grid-lines="navigatorStep"
          :major-ticks="navigatorStep"
          :pane="'navigator'"
          :select="{
            from: min,
            to: max,
          }"
        />
      </ChartCategoryAxis>
      <ChartPanes>
        <ChartPane />
        <ChartPane :name="'navigator'" :height="100" />
      </ChartPanes>
      <ChartValueAxis>
        <ChartValueAxisItem />
        <ChartValueAxisItem :name="'valueNavigatorAxis'" :pane="'navigator'" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :line-style="'smooth'"
          :data-items="data"
          :markers="{
            visible: false,
          }"
        />
        <ChartSeriesItem
          :type="'area'"
          :line-style="'smooth'"
          :data-items="data"
          :axis="'valueNavigatorAxis'"
          :category-axis="'navigatorAxis'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
} from '@progress/kendo-vue-charts';

const data = ref([]);
const categories = ref([]);
const startYear = 2000;
const min = ref(0);
const max = ref(20);
const step = ref(0);

const navigatorStep = computed(() => Math.floor(categories.value.length / 10));

onMounted(() => {
    for (let i = 0; i < 200; i++) {
        categories.value.push(startYear + i);
        data.value.push(Math.floor(Math.random() * 200));
    }
});

function onSelectEnd(args) {
    min.value = args.from;
    max.value = args.to;
    step.value = Math.floor((args.to - args.from) / 10);
}
</script>
