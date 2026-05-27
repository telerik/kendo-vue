<template>
  <div>
    <Scheduler
      :data-items="sampleData"
      :default-date="displayDate"
      :view="view"
      :views="views"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const view = ref('day');
const views = ref([
    {
        name: 'day',
        title: 'Two-Day-View',
        numberOfDays: 2,
        slotDuration: 60,
        slotDivisions: 2,
        startTime: '07:00',
        endTime: '19:00',
        workDayStart: '08:00',
        workDayEnd: '18:00',
    },
]);
</script>
