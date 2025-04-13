<template>
  <div>
    <Scheduler
      :data-items="sampleData"
      :default-date="displayDate"
      :view="view"
      :views="views"
    ></Scheduler>
  </div>
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
      sampleData,
      displayDate,
      view: 'workweek',
      views: [
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
      ],
    };
  },
};
</script>
