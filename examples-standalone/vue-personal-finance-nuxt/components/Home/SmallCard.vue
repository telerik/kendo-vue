<template>
    <Card class="summary-card">
        <div :style='{ fontSize: "20px", letterSpacing: "wide" }' class="summary-topic">
            {{ topic }}
        </div>
        <div :style='{ fontSize: "24px", letterSpacing: "wide" }' class="summary-amount">
            {{ amount }}
        </div>
        <div :style='{ fontSize: "14px", letterSpacing: "wide" }' class="summary-comparison">
            <span :class="positive ? 'positive' : 'negative'">{{ positive ? '+': undefined }}{{ percentage }}%</span> than the last
            month
        </div>
    </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
import { displayCurrencyValue } from "@/utils/currency-converter";

const props = defineProps({
    topic: {
        type: String,
        default: "Earnings",
    },
    amount: {
        type: String,
        default: displayCurrencyValue(50000, "USD"),
    },
    percentage: {
        type: Number,
        default: 0,
    },
});

const positive = props.percentage >= 0 ? true : false;

</script>
<style scoped>
.summary-card { padding: var(--kendo-spacing-4); gap: calc(1.5 * var(--kendo-spacing-base)); border-radius: var(--kendo-border-radius-xxl); }
.summary-topic { padding-block: var(--kendo-spacing-1px); padding-inline: var(--kendo-spacing-0); gap: var(--kendo-spacing-4); }
.summary-amount, .summary-comparison { padding-block: var(--kendo-spacing-1px); padding-inline: var(--kendo-spacing-0); gap: var(--kendo-spacing-6); }
</style>