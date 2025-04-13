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
      view: 'timeline',
      views: [
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
      ],
    };
  },
};
</script>
