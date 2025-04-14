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
        <SchedulerItem v-bind="props">
          <div class="k-event-template" v-if="!props.isAllDay">
            {{ props.title }}
            <div :style="{ 'padding-top': '5px', display: 'flex' }">
              <img :src="props.dataItem.image" :style="{ width: '120px' }" :alt="'Event Image'" />
              <span :style="{ 'padding-left': '5px' }">{{
                props.description
              }}</span>
            </div>
          </div>
          <div class="k-event-template" v-else>
            <img
              :src="'https://static4.depositphotos.com/1004274/315/v/450/depositphotos_3152530-stock-illustration-eco-icon.jpg'"
              :style="{ width: '18px', 'padding-bottom': '5px' }"
              :alt="'Eco Icon'"
            />
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
      views: [{ name: 'day' }, { name: 'month' }],
      sampleData,
      displayDate,
    };
  },
};
</script>
