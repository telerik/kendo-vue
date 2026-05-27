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
import { Day } from '@progress/kendo-date-math';

const view = ref('timeline');
const views = ref([
    {
        name: 'timeline',
        title: 'Hour-By-Hour',
        numberOfDays: 2,
        columnWidth: 100,
        slotDuration: 60,
        slotDivisions: 1,
        startTime: '08:00',
        endTime: '18:00',
        workDayStart: '09:00',
        workDayEnd: '17:00',
        workWeekStart: Day.Sunday,
        workWeekEnd: Day.Monday,
        showWorkHours: false,
    },
]);
</script>
