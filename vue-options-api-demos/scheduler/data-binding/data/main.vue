<template>
  <div>
    <Scheduler
      :data-items="data"
      :default-date="displayDate"
      :view="view"
      :views="views"
      :timezone="'Etc/UTC'"
    ></Scheduler>
  </div>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';

export default {
  components: {
    Scheduler,
  },
  data() {
    return {
      displayDate: new Date('2019-08-27T08:00:00.000Z'),
      data: [
        {
          id: 0,
          title: 'Breakfast with Tom',
          start: new Date('2019-08-27T08:30:00.000Z'),
          end: new Date('2019-08-27T09:00:00.000Z'),
        },
      ],
      view: 'day',
      views: [
        {
          name: 'day',
          title: 'Day',
        },
      ],
    };
  },
};
</script>
