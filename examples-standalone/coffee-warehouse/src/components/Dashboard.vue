<template>
  <section class="page">
    <PageHeader title="Warehouse dashboard" subtitle="Live operational and commercial performance across all coffee warehouse zones." />
    <div class="kpi-grid">
      <article v-for="metric in metrics" :key="metric.label" class="kpi-card">
        <p>{{ metric.label }}</p><strong>{{ metric.value }}</strong>
        <span :class="metric.state">{{ metric.trend }} {{ metric.detail }}</span>
      </article>
    </div>
    <div class="dashboard-grid">
      <article class="panel chart-panel">
        <div class="panel-header">
          <div><h2>Order volume by team</h2><p>Completed orders per month, May–August 2026</p></div>
          <label class="chart-range">Date range <DateRangePicker :value="dateRange" :min="firstDate" :max="lastDate" @change="onDateRangeChange" /></label>
        </div>
        <Chart v-if="filteredMonths.length"><ChartLegend :position="'bottom'" /><ChartCategoryAxis><ChartCategoryAxisItem :categories="filteredMonths" /></ChartCategoryAxis><ChartSeries><ChartSeriesItem v-for="series in filteredChartSeries" :key="series.name" :name="series.name" :data-items="series.data" :type="'line'" /></ChartSeries></Chart>
        <p v-else class="chart-empty">No order data for the selected date range.</p>
      </article>
      <article class="panel">
        <div class="panel-header"><div><h2>Priority alerts</h2><p>Items requiring an operations response</p></div></div>
        <ul class="alert-list">
          <li><Badge theme-color="warning" :rounded="'small'">Low stock</Badge><div><strong>Guatemala Antigua, 25 kg bags</strong><p>18 bags remain; reorder point is 40.</p></div><router-link to="/inventory">Review</router-link></li>
          <li><Badge theme-color="error" :rounded="'small'">Delayed</Badge><div><strong>PO-10482 from Vale Verde</strong><p>Inbound dock appointment is 1 day overdue.</p></div><router-link to="/purchase-orders">Open</router-link></li>
          <li><Badge theme-color="success" :rounded="'small'">On target</Badge><div><strong>Morning fulfilment rate</strong><p>96.4% of orders shipped before the cut-off.</p></div><router-link to="/operations">View</router-link></li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend } from "@progress/kendo-vue-charts";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import { Badge } from "@progress/kendo-vue-indicators";
import PageHeader from "./PageHeader.vue";
export default {
  components: { PageHeader, Badge, DateRangePicker, Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend },
  data() {
    return {
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
