<template>
  <CalendarCell
    :is-selected="isSelected"
    @click="handleClick"
    :style="cellStyle"
  >
    <span class="sent-items">
      {{ formattedValue }}
      <Badge
        v-if="shouldShowBadge"
        theme-color="tertiary"
        rounded="full"
        size="small"
      >
        34
      </Badge>
    </span>
  </CalendarCell>
</template>

<script setup>
import { computed } from 'vue';
import { CalendarCell } from '@progress/kendo-vue-dateinputs';
import { Badge } from '@progress/kendo-vue-indicators';

const props = defineProps(CalendarCell.props);
const emit = defineEmits(['click']);

const cellStyle = computed(() =>
    props.isWeekend ? { opacity: '.7' } : { fontWeight: 'bold' }
);

const shouldShowBadge = computed(() => {
    const day = new Date(props.value).getDate();
    return day <= 3 && !props.isOtherMonth;
});

const handleClick = (e) => {
    emit('click', props.value, e);
};
</script>

<style>
.sent-items {
  position: relative;
  overflow: visible;
}
</style>
