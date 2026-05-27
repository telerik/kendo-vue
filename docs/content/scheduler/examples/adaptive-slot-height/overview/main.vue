<template>
  <Scheduler
    :style="{ height: '900px' }"
    :resources="resources"
    :views="views"
    :default-date="displayDate"
    :data-items="sampleDataWithResources"
    view-item="itemRender"
    view-slot="slotRender"
  >
    <template #itemRender="{ props }">
      <SchedulerViewItem
        v-bind="props"
        :itemStyle="{ height: 'auto' }"
      />
    </template>
    <template #slotRender="{ props }">
      <SchedulerViewSlot
        v-bind="props"
        :slotStyle="{ minHeight: '120px' }"
      />
    </template>
  </Scheduler>
</template>

<script setup>
import { Scheduler, SchedulerViewItem, SchedulerViewSlot } from '@progress/kendo-vue-scheduler';
import { sampleDataWithResources, displayDate } from './events-utc';

const resources = [
    {
        name: 'Rooms',
        data: [
            { text: 'Meeting Room 101', value: 1 },
            { text: 'Meeting Room 201', value: 2, color: '#FF7272' },
        ],
        field: 'roomId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color',
    },
    {
        name: 'Persons',
        data: [
            { text: 'Peter', value: 1, color: '#5392E4' },
            { text: 'Alex', value: 2, color: '#54677B' },
        ],
        field: 'personId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color',
    },
];

const views = [{ name: 'month', title: 'Month', itemsPerSlot: 8 }];
</script>
