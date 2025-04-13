<template>
  <div>
    <Scheduler
      :data-items="sampleDataWithResources"
      :default-date="displayDate"
      :view="view"
      :views="views"
      :resources="resources"
    ></Scheduler>
  </div>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleDataWithResources, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
  },
  data() {
    return {
      sampleDataWithResources,
      displayDate,
      view: 'month',
      views: [
        {
          name: 'month',
          title: 'Month',
        },
      ],
      resources: [
        {
          name: 'Rooms',
          data: [
            { text: 'Meeting Room 101', value: 1, color: '#5392E4' },
            { text: 'Meeting Room 201', value: 2, color: '#FF7272' },
          ],
          field: 'roomId',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
      ],
    };
  },
};
</script>
