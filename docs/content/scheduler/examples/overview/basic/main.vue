<template>
  <Scheduler
    :style="{ height: '700px' }"
    :data-items="sampleDataRef"
    :default-date="displayDateRef"
    :views="views"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const views = ref([
    { name: 'day', title: 'Day' },
    { name: 'week', title: 'Week' },
    { name: 'workweek', title: 'Work week' },
    { name: 'month', title: 'Month' },
    { name: 'agenda', title: 'Agenda' },
]);
const sampleDataRef = ref(sampleData);
const displayDateRef = ref(displayDate);
</script>
