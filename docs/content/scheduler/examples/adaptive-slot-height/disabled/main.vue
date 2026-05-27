<template>
  <Scheduler
    :style="{ height: '900px' }"
    :resources="resources"
    :views="views"
    :default-date="displayDate"
    :data-items="sampleDataWithResources"
    view-slot="slotRender"
  >
    <template #slotRender="{ props }">
      <SchedulerViewSlot
        v-bind="props"
        :expandable="false"
        :slotStyle="{ height: '120px' }"
      />
    </template>
  </Scheduler>
</template>

<script setup>
import { Scheduler, SchedulerViewSlot } from '@progress/kendo-vue-scheduler';
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

const views = [{ name: 'month', title: 'Month', itemsPerSlot: 2 }];
</script>
