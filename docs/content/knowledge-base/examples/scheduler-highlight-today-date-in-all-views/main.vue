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
            'background-color':
              new Date(props.start).toDateString() === new Date().toDateString()
                ? '#56ca85'
                : undefined,
          }"
          @showmoreitems="props.onShowmoreitems"
        />
      </template>
    </Scheduler>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler, SchedulerSlot } from '@progress/kendo-vue-scheduler';
import { sampleData } from './events-utc';

const views = [
    { name: 'week', showWorkHours: false },
    { name: 'day' },
    { name: 'workWeek' },
    { name: 'month' },
];

const displayDate = ref(new Date());
</script>
