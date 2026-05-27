<template>
  <td
    @click="clickHandler"
    :class="['k-calendar-td', cellClass]"
    :style="cellStyle"
  >
    <span class="k-link" :title="isWeekend && sometitle">
      {{ formattedValue }}
    </span>
  </td>
</template>

<script setup>
import { computed } from 'vue';
import { CalendarCell } from '@progress/kendo-vue-dateinputs';

const props = defineProps(CalendarCell.props);
defineEmits(['click']);

const sometitle = "We're closed on the weekends!";

const cellStyle = computed(() => ({
    cursor: 'pointer',
    opacity: props.isWeekend ? 0.6 : 1,
}));

const cellClass = computed(() => ({
    'k-state-selected': props.isSelected,
    'k-state-focused': props.isFocused,
}));

function clickHandler(e) {
    if (!props.isWeekend) {
        emit('click', props.value, e);
    }
}
</script>
