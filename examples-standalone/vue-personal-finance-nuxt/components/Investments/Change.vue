<template>
    <span :style="{ fontSize: '12px', fontWeight: '500' }">
        <span :class="changeClass">
        <SvgIcon :icon="isPositive ? caretAltUpIcon : caretAltDownIcon" />
            {{ props.change }} ({{ ((props.change / props.price) * 100).toFixed(2) }}%)
        </span>
    </span>
</template>
<script setup>
import { ref } from "vue";
import { SvgIcon } from "@progress/kendo-vue-common";
import { caretAltUpIcon, caretAltDownIcon } from "@progress/kendo-svg-icons";

const props = defineProps({
    change: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
});
const isPositive = ref(props.change >= 0);
const changeClass = ref(isPositive.value ? "positive" : "negative");
</script>