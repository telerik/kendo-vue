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

export default {
  components: {
    Scheduler,
  },

  data() {
    return {
      sampleData,
      displayDate,
      view: 'month',
      views: [
        {
          name: 'month',
          title: 'Month',
          selectedDateFormat: '{0:M}',
          selectedShortDateFormat: '{0:M}',
        },
      ],
    };
  },
};
</script>
