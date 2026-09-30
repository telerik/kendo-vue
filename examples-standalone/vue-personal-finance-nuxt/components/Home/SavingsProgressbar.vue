<template>
    <div class="progressbar-label">
        <label>{{ title }}</label>
        <span>
            {{ displayCurrencyValue(value, currency) }}
        </span>
    </div>
    <ProgressBar :value="value" :max="savings" :label-visible="false" />
</template>
<script setup>
import { ProgressBar } from "@progress/kendo-vue-progressbars"
import { displayCurrencyValue } from "@/utils/currency-converter";

defineProps({
    title: {
        type: String,
    },
    value: {
        type: Number,
        default: 0,
    },
    savings: {
        type: Number,
        default: 100000,
    },
    currency: {
        type: String,
        default: "USD",
    },
});
</script>
<style scoped>
.progressbar-label { display: flex; justify-content: space-between; }
</style>