<template>
  <Scheduler
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
  >
  </Scheduler>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';
import { Day } from '@progress/kendo-date-math';

export default {
  components: {
    Scheduler,
  },
  data() {
    return {
      views: [
        { name: 'day', title: 'Day', startTime: '07:00' },
        { name: 'week', title: 'Week', workWeekStart: Day.Monday },
        { name: 'month', title: 'Month' },
      ],
      sampleData,
      displayDate,
    };
  },
};
</script>
