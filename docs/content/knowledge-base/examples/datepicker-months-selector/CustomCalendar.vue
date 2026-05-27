<template>
  <Calendar
    :min="new Date()"
    :value="value"
    @change="handleChange"
    :bottom-view="'year'"
    :top-view="'year'"
  />
</template>

<script setup>
import { Calendar } from '@progress/kendo-vue-dateinputs';

defineProps(Calendar.props);

const emit = defineEmits(['change']);

function handleChange(event) {
  emit('change', {
    event,
    value: event.value,
    target: {
      value: event.value,
    },
  });
}
</script>
