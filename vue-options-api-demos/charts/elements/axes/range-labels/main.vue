<template>
  <div>
    <div class="example-config">
      <div class="form-field">
        <label class="k-checkbox-label">
          <input
            class="k-checkbox k-checkbox-md k-rounded-md"
            :type="'checkbox'"
            :checked="showRangeLabels"
            @change="setShowRangeLabels"
          />
          Show date range labels
        </label>
      </div>
    </div>
    <Chart>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :base-unit="'days'"
          :max-divisions="20"
          :labels="labels"
          :range-labels="rangeLabels"
        />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :style="'smooth'"
          :data-items="data"
          :field="'NewCases'"
          :category-field="'Date'"
          :markers="markers"
          :highlight="highlight"
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
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';
import rawData from './covid-data.json';
const data = rawData.map((record) => {
  record.Date = new Date(record.Timestamp);
  return record;
});

export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  watch: {
    showRangeLabels(value) {
      this.rangeLabels = { format: 'dd MMM yyyy', visible: value };
    },
  },
  mounted() {
    this.showRangeLabels = true;
  },
  data() {
    return {
      data: data,
      markers: {
        visible: false,
      },
      highlight: {
        visible: false,
      },
      labels: {
        format: 'd/M',
      },
      showRangeLabels: false,
      rangeLabels: undefined,
    };
  },
  methods: {
    setShowRangeLabels(e) {
      this.showRangeLabels = e.target.checked;
    },
  },
};
</script>
