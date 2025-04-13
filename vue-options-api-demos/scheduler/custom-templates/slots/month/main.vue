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
          :nav-day="false"
          @showmoreitems="props.onShowmoreitems"
        >
          <span
            :style="{
              'font-weight': 'bold',
            }"
            >{{ formattedDate(props.start) }}</span
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
import { provideIntlService } from '@progress/kendo-vue-intl';

export default {
  components: {
    Scheduler,
    SchedulerSlot,
  },
  data() {
    return {
      views: [{ name: 'month' }],
      sampleData,
      displayDate,
    };
  },
  methods: {
    formattedDate: function (date) {
      return provideIntlService(this).formatDate(date, 'd.MM.y');
    },
  },
};
</script>
