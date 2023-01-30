<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      :slot-render="'slotRender'"
    >
      <template v-slot:slotRender="{ props }">
        <SchedulerSlot
          v-bind="props"
          :style="{
            'background-color': props.isAllDay
              ? '#56ca85' // Define the color of AllDay slots
              : props.isWorkDay
              ? '#ffddcc' // Define the color of WorkDay slots
              : props.isWorkHour
              ? '#ccff99' // Define the color of WorkHours slots
              : !props.isWorkDay
              ? '#ffcccb ' // Define the color of Non-WorkDay slots
              : undefined,
          }"
          @showmoreitems="props.onShowmoreitems"
        >
        </SchedulerSlot>
      </template>
    </Scheduler>
  </div>
</template>
<script>
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import { Scheduler, SchedulerSlot } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
    SchedulerSlot,
  },
  data() {
    return {
      views: [
        { name: 'week', showWorkHours: false },
        { name: 'day' },
        { name: 'workWeek' },
        { name: 'month' },
      ],
      sampleData,
      displayDate,
    };
  },
};
</script>