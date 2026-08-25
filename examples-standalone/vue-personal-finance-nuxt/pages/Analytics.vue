<template>
    <h1 class="page-title">Analytics</h1>
    <div class="analytics-layout">
        <div class="analytics-panel">
            <CashFlowChart />
        </div>
        <div class="analytics-panel">
            <TransactionsGrid />
        </div>
    </div>
</template>
<script setup>
import TransactionsGrid from "@/components/common/TransactionsGrid.vue";
import CashFlowChart from "@/components/Analytics/Cashflow.vue";
</script>
<style scoped>
.page-title { margin: 0; padding: var(--kendo-spacing-5); }
.analytics-layout { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: var(--kendo-spacing-5); padding: var(--kendo-spacing-5); }
.analytics-panel { grid-column: span 6 / span 6; }
@media (min-width: 768px) { .page-title { padding-inline: var(--kendo-spacing-15); } .analytics-layout { grid-template-columns: repeat(6, minmax(0, 1fr)); padding: var(--kendo-spacing-5); padding-inline: var(--kendo-spacing-15); } }
</style>