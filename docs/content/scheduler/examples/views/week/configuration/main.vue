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

const view = ref('workweek');
const views = ref([
    {
        name: 'workweek',
        title: 'Work Week',
        workWeekStart: Day.Monday,
        workWeekEnd: Day.Thursday,
    },
    {
        name: 'week',
        title: 'Full Week',
        workWeekStart: Day.Monday,
        workWeekEnd: Day.Thursday,
    },
]);
</script>
