<template>
  <div>
    <KButton type="button" @click="onHighlight">
      Highlight Starbucks
    </KButton>
    <hr class="k-hr" />
    <Chart ref="chartRef">
      <ChartTitle text="Job Growth" />
      <ChartSeries>
        <ChartSeriesItem
          type="bubble"
          :name="'Job Applications'"
          :data-items="data"
          x-field="x"
          y-field="y"
          size-field="size"
          category-field="category"
        />
      </ChartSeries>
      <ChartXAxis>
        <ChartXAxisItem
          :axis-crossing-value="-5000"
          :major-unit="2000"
          :labels="{
            format: '{0:N0}',
            skip: 1,
            rotation: 'auto',
          }"
        />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem
          :labels="{
            format: '{0:N0}',
          }"
        />
      </ChartYAxis>
      <ChartTooltip format="{3}: {2:N0} applications" :opacity="1" />
      <ChartLegend :position="'bottom'" />
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartTooltip,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const data = ref([
    { x: 2500, y: 50000, size: 500000, category: "Microsoft" },
    { x: 500, y: 110000, size: 7600000, category: "Starbucks" },
    { x: 7000, y: 19000, size: 700000, category: "Google" },
    { x: 1400, y: 150000, size: 700000, category: "Publix Super Markets" },
    { x: 2400, y: 30000, size: 300000, category: "PricewaterhouseCoopers" },
    { x: 2450, y: 34000, size: 90000, category: "Cisco" },
    { x: 2700, y: 34000, size: 400000, category: "Accenture" },
    { x: 2900, y: 40000, size: 450000, category: "Deloitte" },
    { x: 3000, y: 55000, size: 900000, category: "Whole Foods Market" },
]);

const chartRef = ref(null);

const onHighlight = () => {
    const chartInstance = chartRef.value?.chartInstance();
    if (chartInstance) {
        chartInstance.toggleHighlight(true, (i) => i.category === "Starbucks");
        chartInstance.showTooltip((i) => i.category === "Starbucks");
    }
};
</script>
