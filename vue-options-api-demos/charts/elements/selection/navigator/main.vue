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

<script>
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

export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  mounted() {
    for (let i = 0; i < 200; i++) {
      this.categories.push(this.startYear + i);
      this.data.push(Math.floor(Math.random() * 200));
    }
  },
  computed: {
    navigatorStep() {
      return Math.floor(this.categories.length / 10);
    },
  },
  data() {
    return {
      data: [],
      categories: [],
      startYear: 2000,
      min: 0,
      max: 20,
      step: 0,
    };
  },
  methods: {
    onSelectEnd(args) {
      this.min = args.from;
      this.max = args.to;
      this.step = Math.floor((args.to - args.from) / 10);
    },
  },
};
</script>
