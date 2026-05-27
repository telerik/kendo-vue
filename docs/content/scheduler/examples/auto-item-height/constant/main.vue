<template>
  <Scheduler
    :style="{ height: '900px' }"
    :resources="resources"
    :views="views"
    :default-date="displayDate"
    :data-items="sampleDataWithResources"
    view-item="itemRender"
  >
    <template #itemRender="{ props }">
      <SchedulerViewItem
        v-bind="props"
        :itemStyle="{ height: '45px' }"
      />
    </template>
  </Scheduler>
</template>

<script setup>
import { Scheduler, SchedulerViewItem } from '@progress/kendo-vue-scheduler';
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

const views = [
    { name: 'workweek', title: 'Work week' },
    { name: 'day', title: 'Day' },
    { name: 'week', title: 'Week' },
    { name: 'month', title: 'Month' },
    { name: 'agenda', title: 'Agenda' },
];
</script>
