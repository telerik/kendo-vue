<template>
    <h1 class="page-title">Overview</h1>
    <div class="overview-layout">
        <div class="summary-panel">
            <SmallCard :topic="'Earnings'" :amount="displayCurrencyValue(50000, currency)" :percentage="200" />
        </div>
        <div class="summary-panel">
            <SmallCard :topic="'Spendings'" :amount="displayCurrencyValue(50000, currency)" :percentage="100" />
        </div>
        <div class="summary-panel">
            <SmallCard :topic="'Investments'" :amount="displayCurrencyValue(35000, currency)" :percentage="-80" />
        </div>
        <div class="half-panel">
            <Savings :savings="savings" :currency="currency" />
        </div>
        <div class="half-panel">
            <BudgetUtilization :currency="currency" />
        </div>
        <div class="full-panel">
            <TransactionsGrid :currency="currency" />
        </div>
    </div>
</template>
<script setup>
import { inject, ref } from "vue";
import SmallCard from "@/components/Home/SmallCard.vue";
import Savings from "@/components/Home/Savings.vue";
import BudgetUtilization from "@/components/Home/BudgetUtilization.vue";
import TransactionsGrid from "@/components/common/TransactionsGrid.vue";

const currency = inject("currency");
const savings = ref(104500)
</script>
<style scoped>
.page-title { margin: 0; padding: var(--kendo-spacing-5); }
.overview-layout { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: var(--kendo-spacing-5); padding: var(--kendo-spacing-5); }
.summary-panel, .half-panel, .full-panel { grid-column: span 6 / span 6; }
@media (min-width: 768px) { .page-title { padding-inline: var(--kendo-spacing-15); } .overview-layout { grid-template-columns: repeat(6, minmax(0, 1fr)); padding: var(--kendo-spacing-5); padding-inline: var(--kendo-spacing-15); } .summary-panel { grid-column: span 2 / span 2; } .half-panel { grid-column: span 3 / span 3; } }
</style>