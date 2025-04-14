<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      :task="'taskRender'"
    >
      <template
        v-slot:taskRender="{
          props: { title, isAllDay, recurrenceRule, isRecurring, ...others },
        }"
      >
        <SchedulerTask
          v-bind="others"
          :class="'agenda-task'"
          :style="{
            backgroundColor: isAllDay ? 'green' : 'blue',
          }"
        >
          <div class="k-event-template">
            <span v-if="isAllDay" class="k-icon k-i-calendar"></span>
            <span v-if="recurrenceRule" class="k-icon k-i-reload"></span>
            <span
              v-if="!recurrenceRule && !isAllDay"
              class="k-icon k-i-arrow-right"
            ></span>
            {{ title }}
          </div>
        </SchedulerTask>
      </template>
    </Scheduler>
  </div>
</template>
<script>
import { Scheduler, SchedulerTask } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
    SchedulerTask,
  },
  data() {
    return {
      views: [{ name: 'agenda' }],
      sampleData,
      displayDate,
    };
  },
};
</script>
<style>
.agenda-task {
  color: white;
}

.k-icon {
  padding-bottom: 4px;
}
</style>
