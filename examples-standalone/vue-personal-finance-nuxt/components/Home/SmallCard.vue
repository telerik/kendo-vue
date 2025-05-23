<template>
    <Card class="k-rounded-xxl k-gap-1.5 k-p-4">
        <div :style='{ fontSize: "20px", letterSpacing: "wide" }' class="k-pt-1px k-pb-1px k-pr-0 k-pl-0 k-gap-4">
            {{ topic }}
        </div>
        <div :style='{ fontSize: "24px", letterSpacing: "wide" }' class="k-pt-1px k-pb-1px k-pr-0 k-pl-0 k-gap-6">
            {{ amount }}
        </div>
        <div :style='{ fontSize: "14px", letterSpacing: "wide" }' class="k-pt-1px k-pb-1px k-pr-0 k-pl-0 k-gap-6">
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