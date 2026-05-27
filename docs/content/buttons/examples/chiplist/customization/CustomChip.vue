<template>
    <Chip
      :rounded="'full'"
      :data-item="dataItem"
      :disabled="winterMonths.some((f) => f === dataItem.value)"
      :style="{backgroundColor: colorMap[dataItem.value]}"
      :text="text"
      :value="value"
      :removable="true"/>
</template>

<script setup>
import { Chip } from '@progress/kendo-vue-buttons';

const colorMap = {
    '1': '#B4E5F4',
    '2': '#B4E5F4',
    '3': '#B4E5F4',
    '4': '#F0C88B',
    '5': '#F0C88B',
    '6': '#F0C88B'
};

const winterMonths = [
    '1', '2', '3'
];

defineProps({
    dataItem: Object,
    value: String,
    text: String
});
</script>
