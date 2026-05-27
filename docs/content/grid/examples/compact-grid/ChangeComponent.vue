<template>
  <td :class="className">
    <span :style="getStyle"> {{ changeFieldValue }}</span>
  </td>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    dataItem: Object,
    className: String,
});

const changeFieldValue = computed(() => {
    return (props.dataItem.close - props.dataItem.open).toFixed(2);
});

const getStyle = computed(() => {
    return changeFieldValue.value < 0 ? { color: 'red' } : { color: 'blue' };
});
</script>
