<template>
    <Chip
        :class="statusClass(dataItem)"
        :style="{ height: height, width: 'fit-content' }"
        :text="dataItem.orderStatus"
        :rounded="'large'"
    />
</template>
<script setup>
import { Chip } from "@progress/kendo-vue-buttons";

const props = defineProps({
    dataItem: {
        type: Object,
    },
    height: {
        type: String,
        default: undefined
    },
});

const statusClass = (dataItem) => {
    switch (dataItem.orderStatus) {
        case "Pending":
            return "status-pending";
        case "Published":
            return "status-published";
        case "Postponed":
            return "status-postponed";
        default:
            return "status-unknown";
    }
};
</script>

<style scoped>
:deep(.status-pending) { color: var(--kendo-color-warning-on-subtle); background: var(--kendo-color-warning-subtle); }
:deep(.status-published) { color: var(--kendo-color-success-on-subtle); background: var(--kendo-color-success-subtle); }
:deep(.status-postponed) { color: var(--kendo-color-error-on-subtle); background: var(--kendo-color-error-subtle); }
:deep(.status-unknown) { color: var(--kendo-color-on-base); background: var(--kendo-color-base-subtle); }
</style>