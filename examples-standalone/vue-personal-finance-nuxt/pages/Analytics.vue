<template>
    <h1 class="k-px-md-15 k-p-5 k-m-0">Analytics</h1>
    <div class="k-d-grid k-grid-cols-1 k-grid-cols-md-6 k-gap-5 k-p-md-5 k-px-md-15 k-p-5">
        <div class="k-col-span-6">
            <CashFlowChart />
        </div>
        <div class="k-col-span-6">
            <TransactionsGrid />
        </div>
    </div>
</template>
<script setup>
import TransactionsGrid from "@/components/common/TransactionsGrid.vue";
import CashFlowChart from "@/components/Analytics/Cashflow.vue";
</script>