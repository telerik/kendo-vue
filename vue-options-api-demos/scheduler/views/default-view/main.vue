<template>
  <Scheduler
    :default-view="'month'"
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
  >
  </Scheduler>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
  },
  data() {
    return {
      views: [
        { name: 'day', title: 'Day' },
        { name: 'week', title: 'Week' },
        { name: 'month', title: 'Month' },
      ],
      sampleData,
      displayDate,
    };
  },
};
</script>
