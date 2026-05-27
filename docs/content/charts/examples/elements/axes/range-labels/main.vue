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
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
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
          :name="'New Cases'"
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

<script setup>
import { ref, watch, onMounted } from 'vue';
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import rawData from './covid-data.json';

const data = ref(rawData.map((record) => {
    record.Date = new Date(record.Timestamp);
    return record;
}));

const markers = ref({ visible: false });
const highlight = ref({ visible: false });
const labels = ref({ format: 'd/M' });
const showRangeLabels = ref(false);
const rangeLabels = ref(undefined);

watch(showRangeLabels, (value) => {
    rangeLabels.value = { format: 'dd MMM yyyy', visible: value };
});

onMounted(() => {
    showRangeLabels.value = true;
});

function setShowRangeLabels(e) {
    showRangeLabels.value = e.target.checked;
}
</script>
