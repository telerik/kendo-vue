<template>
  <Scheduler
    :style="{ height: '900px' }"
    :resources="resources"
    :views="views"
    :defaultDate="displayDate"
    :dataItems="sampleDataWithResources"
    :viewItem="'itemRender'"
    :viewSlot="'slotRender'"
  >
    <template v-slot:itemRender="{ props }">
      <SchedulerViewItem
        v-bind="props"
        :itemStyle="{
          height: 'auto',
        }"
      />
    </template>
     <template v-slot:slotRender="{ props }">
      <SchedulerViewSlot
        v-bind="props"
        :slotStyle="{
          minHeight: '120px',
        }"
      />
    </template>
  </Scheduler>
</template>
<script>
import { Scheduler, SchedulerItem, SchedulerViewItem, SchedulerViewSlot } from '@progress/kendo-vue-scheduler';
import { sampleDataWithResources, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
    SchedulerViewItem,
    SchedulerViewSlot
  },
  data() {
    return {
      resources: [
        {
          name: 'Rooms',
          data: [
            {
              text: 'Meeting Room 101',
              value: 1,
            },
            {
              text: 'Meeting Room 201',
              value: 2,
              color: '#FF7272',
            },
          ],
          field: 'roomId',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
        {
          name: 'Persons',
          data: [
            {
              text: 'Peter',
              value: 1,
              color: '#5392E4',
            },
            {
              text: 'Alex',
              value: 2,
              color: '#54677B',
            },
          ],
          field: 'personId',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
      ],
      views: [
        { name: 'month', title: 'Month', itemsPerSlot: 8 }
      ],
      sampleDataWithResources,
      displayDate,
    };
  },
};
</script>
