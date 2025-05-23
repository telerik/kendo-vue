<template>
    <h1 class="k-px-md-15 k-p-5 k-m-0">Overview</h1>
    <div class="k-d-grid k-grid-cols-1 k-grid-cols-md-6 k-gap-5 k-p-md-5 k-px-md-15 k-p-5">
        <div class="k-col-span-6 k-col-span-md-2">
            <SmallCard :topic="'Earnings'" :amount="displayCurrencyValue(50000, currency)" :percentage="200" />
        </div>
        <div class="k-col-span-6 k-col-span-md-2">
            <SmallCard :topic="'Spendings'" :amount="displayCurrencyValue(50000, currency)" :percentage="100" />
        </div>
        <div class="k-col-span-6 k-col-span-md-2">
            <SmallCard :topic="'Investments'" :amount="displayCurrencyValue(35000, currency)" :percentage="-80" />
        </div>
        <div class="k-col-span-6 k-col-span-md-3">
            <Savings :savings="savings" :currency="currency" />
        </div>
        <div class="k-col-span-6 k-col-span-md-3">
            <BudgetUtilization :currency="currency" />
        </div>
        <div class="k-col-span-6">
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