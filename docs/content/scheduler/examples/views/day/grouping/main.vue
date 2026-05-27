<template>
  <div>
    <Scheduler
      :data-items="sampleDataWithResources"
      :default-date="displayDate"
      :view="view"
      :views="views"
      :group="group"
      :resources="resources"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleDataWithResources, displayDate } from './events-utc';

const view = ref('day');
const views = ref([
    {
        name: 'day',
        title: 'Two-Day-View',
        numberOfDays: 2,
        slotDuration: 60,
        slotDivisions: 2,
        startTime: '07:00',
        endTime: '19:00',
        workDayStart: '08:00',
        workDayEnd: '18:00',
    },
]);

const group = ref({
    resources: ['Rooms', 'Persons'],
    orientation: 'horizontal',
});

const resources = ref([
    {
        name: 'Rooms',
        data: [
            { text: 'Meeting Room 101', value: 1 },
            { text: 'Meeting Room 201', value: 2, color: 'green' },
        ],
        field: 'roomId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color',
    },
    {
        name: 'Persons',
        data: [
            { text: 'Peter', value: 1, color: 'red' },
            { text: 'Alex', value: 2 },
        ],
        field: 'personId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color',
    },
]);
</script>
