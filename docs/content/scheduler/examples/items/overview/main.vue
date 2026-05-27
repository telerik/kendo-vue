<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      :item="'itemRender'"
    >
      <template #itemRender="{ props }">
        <SchedulerItem
          v-bind="props"
          :style="{
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
import { ref } from 'vue';
import { Scheduler, SchedulerItem } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const views = ref([
    { name: 'day' },
    { name: 'workweek', title: 'Work week' },
    { name: 'week' },
    { name: 'month' },
]);
</script>
