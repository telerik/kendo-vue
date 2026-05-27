<template>
  <Scheduler
    :rtl="true"
    :style="{ height: '700px' }"
    :data-items="sampleData"
    :default-date="displayDate"
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
</script>
