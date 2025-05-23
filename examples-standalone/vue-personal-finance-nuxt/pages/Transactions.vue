<template>
    <h1 class="k-px-md-15 k-p-5 k-m-0">Transactions</h1>
    <div class="k-d-grid k-grid-cols-12 k-gap-4 k-gap-lg-6 k-mb-5 k-overflow-hidden k-p-md-5 k-px-md-15 k-p-5">
        <div class="k-col-span-12 k-col-span-xl-8 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
            <PersonalTransactions @selectionChange="onSelectionChange" />
        </div>
        <div class="k-col-span-12 k-col-span-xl-4 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-1 k-h-full">
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