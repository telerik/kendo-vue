<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      slot-render="slotRender"
    >
      <template #slotRender="{ props }">
        <SchedulerSlot
          v-bind="props"
          :style="{
            'background-color': props.isAllDay
              ? '#56ca85'
              : props.isWorkDay
              ? '#ffddcc'
              : props.isWorkHour
              ? '#ccff99'
              : !props.isWorkDay
              ? '#ffcccb'
              : undefined,
          }"
          @showmoreitems="props.onShowmoreitems"
        />
      </template>
    </Scheduler>
  </div>
</template>

<script setup>
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import { Scheduler, SchedulerSlot } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const views = [
    { name: 'week', showWorkHours: false },
    { name: 'day' },
    { name: 'workWeek' },
    { name: 'month' },
];
</script>
