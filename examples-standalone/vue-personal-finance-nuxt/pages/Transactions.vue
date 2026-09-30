<template>
    <h1 class="page-title">Transactions</h1>
    <div class="transactions-layout">
        <div class="transactions-panel">
            <PersonalTransactions @selectionChange="onSelectionChange" />
        </div>
        <div class="details-panel">
            <TransactionDetails :transaction-data="selectedTransaction" />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import PersonalTransactions from "@/components/Transactions/PersonalTransactions.vue";
import TransactionDetails from "@/components/Transactions/TransactionDetails.vue";
import { gridTransactions } from "@/data/transactions.js";

const selectedTransaction = ref(gridTransactions[0]);

const onSelectionChange = (event) => {
    selectedTransaction.value = event;
};
</script>
<style scoped>
.page-title { margin: 0; padding: var(--kendo-spacing-5); }
.transactions-layout { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--kendo-spacing-4); margin-bottom: var(--kendo-spacing-5); overflow: hidden; padding: var(--kendo-spacing-5); }
.transactions-panel, .details-panel { grid-column: span 12 / span 12; display: flex; flex: 1 1 0; flex-direction: column; }
.details-panel { gap: var(--kendo-spacing-1); height: 100%; }
@media (min-width: 768px) { .page-title { padding-inline: var(--kendo-spacing-15); } .transactions-layout { padding: var(--kendo-spacing-5); padding-inline: var(--kendo-spacing-15); } }
@media (min-width: 992px) { .transactions-layout { gap: var(--kendo-spacing-6); } }
@media (min-width: 1200px) { .transactions-panel { grid-column: span 8 / span 8; } .details-panel { grid-column: span 4 / span 4; } }
</style>
