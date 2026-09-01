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
        <div class="panel-header"><div><h2>Order volume by team</h2><p>Completed orders per month, current quarter</p></div><span class="updated">Updated 4 min ago</span></div>
        <Chart><ChartLegend :position="'bottom'" /><ChartCategoryAxis><ChartCategoryAxisItem :categories="months" /></ChartCategoryAxis><ChartSeries><ChartSeriesItem v-for="series in chartSeries" :key="series.name" :name="series.name" :data-items="series.data" :type="'line'" /></ChartSeries></Chart>
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
import { Badge } from "@progress/kendo-vue-indicators";
import PageHeader from "./PageHeader.vue";
export default {
  components: { PageHeader, Badge, Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend },
  data() {
    return {
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
};
</script>
