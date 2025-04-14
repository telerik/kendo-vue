<template>
  <Scheduler
    :style="{ height: '700px' }"
    :data-items="data"
    :default-date="defaultDate"
    :views="views"
    :show-work-hours="false"
  ></Scheduler>
</template>
<script>
import '@progress/kendo-date-math/tz/America/New_York';

import { Scheduler } from '@progress/kendo-vue-scheduler';

export default {
  components: {
    Scheduler,
  },
  data() {
    return {
      views: [{ name: 'day', title: 'Day' }],
      defaultDate: new Date('2019-08-27T08:00:00.000Z'),
      data: [
        {
          id: 0,
          title: 'Breakfast with Tom',
          start: new Date('2019-08-27T08:30:00.000Z'),
          end: new Date('2019-08-27T09:00:00.000Z'),
        },
      ],
    };
  },
};
</script>
