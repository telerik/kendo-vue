<template>
    <Chip :style='{ backgroundColor: backgroundColor(dataItem), color: "#121710", height: height, width: "fit-content" }'
        :text="dataItem.orderStatus" :rounded="'large'" />
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

const backgroundColor = (dataItem) => {
    switch (dataItem.orderStatus) {
        case "Pending":
            return "#FFE19C";
        case "Published":
            return "#A7DB97";
        case "Postponed":
            return "#D77B8B";
        default:
            return "#CCCCCC"; // Gray for unknown status
    }
};
</script>