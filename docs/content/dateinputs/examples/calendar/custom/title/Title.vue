<template>
  <CalendarHeaderTitle
    :id="id"
    :value="value"
    :view="view"
    @click="clickHandler"
  >
    {{ view === 0 ? value.split(' ')[0] : value }}
    <code v-if="view !== 3">↑</code>
  </CalendarHeaderTitle>
</template>

<script setup>
import { CalendarHeaderTitle } from '@progress/kendo-vue-dateinputs';
defineProps(CalendarHeaderTitle.props);
defineEmits(['click']);

function clickHandler(e) {
    emit('click', e);
}
</script>
