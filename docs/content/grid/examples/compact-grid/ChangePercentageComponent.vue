<template>
  <td :class="className">
    <span :style="getStyle"> {{ formatNumber(changeFieldValue, 'p2') }}</span>
  </td>
</template>

<script setup>
import { computed } from 'vue';
import { formatNumber } from '@progress/kendo-intl';

const props = defineProps({
    dataItem: Object,
    className: String,
});

const changeFieldValue = computed(() => {
    return (props.dataItem.close - props.dataItem.open) / props.dataItem.open;
});

const getStyle = computed(() => {
    return changeFieldValue.value < 0 ? { color: 'red' } : undefined;
});
</script>
