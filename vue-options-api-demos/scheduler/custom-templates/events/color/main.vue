<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      :item="'itemRender'"
    >
      <template v-slot:itemRender="{ props }">
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
<script>
import { Scheduler, SchedulerItem } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
    SchedulerItem,
  },
  data() {
    return {
      views: [
        { name: 'day' },
        { name: 'workweek', title: 'Work week' },
        { name: 'week' },
        { name: 'month' },
      ],
      sampleData,
      displayDate,
    };
  },
};
</script>
