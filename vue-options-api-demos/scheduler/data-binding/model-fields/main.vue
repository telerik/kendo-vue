<template>
  <div>
    <Scheduler
      :data-items="data"
      :default-date="displayDate"
      :view="view"
      :views="views"
      :modelFields="modelFields"
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
      displayDate: new Date('2019-08-26T21:00:00.000Z'),
      data: [
        {
          TaskID: 0,
          Subject: 'Breakfast with Tom',
          Start: new Date('2019-08-27T05:30:00.000Z'),
          End: new Date('2019-08-27T06:00:00.000Z'),
        },
        {
          TaskID: 1,
          Subject: 'Lunch with Loren',
          Start: new Date('2019-08-27T09:00:00.000Z'),
          End: new Date('2019-08-27T10:00:00.000Z'),
        },
      ],
      modelFields: {
        id: 'TaskID',
        title: 'Subject',
        start: 'Start',
        end: 'End',
      },
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
