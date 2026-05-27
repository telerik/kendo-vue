<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      :task="'taskRender'"
    >
      <template #taskRender="{ props: { title, isAllDay, recurrenceRule, ...others } }">
        <SchedulerTask
          v-bind="others"
          :class="'agenda-task'"
          :style="{ backgroundColor: isAllDay ? 'green' : 'blue' }"
        >
          <div class="k-event-template">
            <span v-if="isAllDay" class="k-icon k-i-calendar"></span>
            <span v-if="recurrenceRule" class="k-icon k-i-arrow-rotate-cw"></span>
            <span v-if="!recurrenceRule && !isAllDay" class="k-icon k-i-arrow-right"></span>
            {{ title }}
          </div>
        </SchedulerTask>
      </template>
    </Scheduler>
  </div>
</template>

<script setup>
import { Scheduler, SchedulerTask } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const views = [{ name: 'agenda' }];
</script>

<style>
.agenda-task {
  color: white;
}

.k-icon {
  padding-bottom: 4px;
}
</style>
