<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      item="itemRender"
    >
      <template #itemRender="{ props }">
        <SchedulerItem
          v-bind="props"
          :itemStyle="{
            backgroundColor: props.isAllDay ? 'green' : 'blue',
          }"
        >
          <div class="k-event-template">
            {{ props.title }}
          </div>
        </SchedulerItem>
      </template>
    </Scheduler>
  </div>
</template>

<script setup>
import { Scheduler, SchedulerItem } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const views = [
    { name: 'day' },
    { name: 'workweek', title: 'Work week' },
    { name: 'week' },
    { name: 'month' },
];
</script>
