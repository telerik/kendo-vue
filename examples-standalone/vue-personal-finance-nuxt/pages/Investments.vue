<template>
     <h1 class="page-title">Investments</h1>
      <div class="investments-layout">
        <div class="total-investments-panel">
            <TotalInvestments />
        </div>
        <div class="top-movers-panel">
            <TopMovers />
        </div>
        <div class="stock-chart-panel">
            <StockChart />
        </div>
      </div>
</template>
<script setup>
import TotalInvestments from "@/components/Investments/TotalInvestments.vue";
import TopMovers from "@/components/Investments/TopMovers.vue";
import StockChart from "@/components/Investments/StockChart.vue";
</script>
<style scoped>
.page-title { margin: 0; padding: var(--kendo-spacing-5); }
.investments-layout { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: var(--kendo-spacing-5); padding: var(--kendo-spacing-5); }
.total-investments-panel, .top-movers-panel { grid-column: span 9 / span 9; display: flex; flex: 1 1 0; flex-direction: column; gap: var(--kendo-spacing-4); }
.stock-chart-panel { grid-column: span 9 / span 9; }
@media (min-width: 768px) { .page-title { padding-inline: var(--kendo-spacing-15); } .investments-layout { grid-template-columns: repeat(9, minmax(0, 1fr)); padding: var(--kendo-spacing-5); padding-inline: var(--kendo-spacing-15); } }
@media (min-width: 1200px) { .total-investments-panel { grid-column: span 4 / span 4; } .top-movers-panel { grid-column: span 5 / span 5; } }
</style>
