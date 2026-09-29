<template>
  <section class="page">
    <PageHeader title="Warehouse dashboard" subtitle="Live operational and commercial performance across all coffee warehouse zones." />
    <div class="kpi-grid">
      <article v-for="metric in metrics" :key="metric.label" class="kpi-card">
        <p>{{ metric.label }}</p><strong>{{ metric.value }}</strong>
        <span :class="metric.state">{{ metric.trend }} {{ metric.detail }}</span>
      </article>
    </div>
    <article class="panel chart-panel">
        <div class="panel-header">
          <div><h2>Order volume by team</h2><p>Completed orders per month, May–August 2026</p></div>
          <ButtonGroup aria-label="Chart view">
            <KButton :togglable="true" :selected="chartMode === 'trend'" :aria-pressed="chartMode === 'trend'" @click="chartMode = 'trend'">{{ trendMessage }}</KButton>
            <KButton :togglable="true" :selected="chartMode === 'volume'" :aria-pressed="chartMode === 'volume'" @click="chartMode = 'volume'">{{ volumeMessage }}</KButton>
          </ButtonGroup>
          <div class="chart-range"><span>Date range</span><DateRangePicker :value="dateRange" :min="firstDate" :max="lastDate" @change="onDateRangeChange" /></div>
        </div>
        <Chart v-if="filteredMonths.length" :key="chartMode"><ChartLegend :position="'bottom'" /><ChartCategoryAxis><ChartCategoryAxisItem :categories="filteredMonths" /></ChartCategoryAxis><ChartSeries><ChartSeriesItem v-for="series in filteredChartSeries" :key="series.name" :name="series.name" :data-items="series.data" :type="chartMode === 'trend' ? 'line' : 'column'" /></ChartSeries></Chart>
        <p v-else class="chart-empty">No order data for the selected date range.</p>
    </article>
  </section>
</template>

<script>
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend } from "@progress/kendo-vue-charts";
import { Button as KButton, ButtonGroup } from "@progress/kendo-vue-buttons";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import { provideLocalizationService } from "@progress/kendo-vue-intl";
import PageHeader from "./PageHeader.vue";
export default {
  components: { PageHeader, KButton, ButtonGroup, DateRangePicker, Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend },
  inject: { kendoLocalizationService: { default: null } },
  data() {
    return {
      chartMode: "trend",
      firstDate: new Date(2026, 4, 1),
      lastDate: new Date(2026, 7, 31),
      dateRange: { start: new Date(2026, 4, 1), end: new Date(2026, 7, 31) },
      months: ["May", "Jun", "Jul", "Aug"],
      chartSeries: [{ name: "Roasting", data: [184, 211, 198, 236] }, { name: "Fulfilment", data: [162, 194, 213, 227] }, { name: "Quality", data: [148, 171, 166, 189] }],
      metrics: [
        { label: "ORDERS SHIPPED TODAY", value: "1,248", trend: "Up 8.2%", detail: "vs. last Tuesday", state: "success" },
        { label: "ON-TIME FULFILMENT", value: "96.4%", trend: "On target", detail: "target: 95%", state: "success" },
        { label: "LOW-STOCK SKUS", value: "18", trend: "Needs review", detail: "6 more than yesterday", state: "warning" },
        { label: "OPEN PURCHASE ORDERS", value: "42", trend: "Down 5", detail: "vs. last week", state: "success" },
      ],
    };
  },
  computed: {
    trendMessage() {
      return provideLocalizationService(this).toLanguageString("trend", "Trend");
    },
    volumeMessage() {
      return provideLocalizationService(this).toLanguageString("volume", "Volume");
    },
    visibleMonthIndexes() {
      const { start, end } = this.dateRange;
      if (!start || !end) return [];
      return this.months.map((_, index) => index).filter((index) => {
        const monthStart = new Date(2026, index + 4, 1);
        const monthEnd = new Date(2026, index + 5, 0);
        return monthStart <= end && monthEnd >= start;
      });
    },
    filteredMonths() {
      return this.visibleMonthIndexes.map((index) => this.months[index]);
    },
    filteredChartSeries() {
      return this.chartSeries.map((series) => ({
        ...series,
        data: this.visibleMonthIndexes.map((index) => series.data[index]),
      }));
    },
  },
  methods: {
    onDateRangeChange(event) {
      this.dateRange = event.value;
    },
  },
};
</script>
