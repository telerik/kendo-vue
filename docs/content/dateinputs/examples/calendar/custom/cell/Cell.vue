<template>
  <CalendarCell :is-selected="isSelected" @click="handleClick" :style="cellStyle">
    {{ formattedValue }}
  </CalendarCell>
</template>

<script setup>
import { computed } from 'vue';
import { CalendarCell } from '@progress/kendo-vue-dateinputs';

const props = defineProps(CalendarCell.props);
defineEmits(['click']);

const cellStyle = computed(() =>
    props.isWeekend ? { opacity: '.7' } : { fontWeight: 'bold' }
);

function handleClick(e) {
    emit('click', props.value, e);
}
</script>
