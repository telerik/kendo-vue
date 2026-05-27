<template>
  <Scheduler
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';
import { Day } from '@progress/kendo-date-math';

const views = ref([
    { name: 'day', title: 'Day', startTime: '07:00' },
    { name: 'week', title: 'Week', workWeekStart: Day.Monday },
    { name: 'month', title: 'Month' },
]);
</script>
