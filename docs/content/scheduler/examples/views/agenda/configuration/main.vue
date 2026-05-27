<template>
  <div>
    <Scheduler
      :data-items="sampleDataRef"
      :default-date="displayDateRef"
      :view="view"
      :views="views"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const sampleDataRef = ref(sampleData);
const displayDateRef = ref(displayDate);
const view = ref('agenda');
const views = ref([
    {
        name: 'agenda',
        title: 'Agenda View',
        step: 2,
        numberOfDays: 2,
        selectedDateFormat: 'From: {0:D} To: {1:D}',
        selectedShortDateFormat: 'From: {0:d} To: {1:d}',
    },
]);
</script>
