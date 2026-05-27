<template>
  <Scheduler
    :style="{ height: '700px' }"
    :data-items="data"
    :default-date="defaultDate"
    :views="views"
    :group="group"
    :resources="resources"
    :timezone="'Etc/UTC'"
  />
</template>
<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { data, defaultDate } from './data';

const views = ref([{ name: 'day', title: 'Day' }]);
const group = ref({
    resources: ['Rooms', 'Persons'],
    orientation: 'horizontal',
});
const resources = ref([
    {
        name: 'Rooms',
        data: [
            { text: 'Meeting Room 101', value: 1 },
            { text: 'Meeting Room 201', value: 2 },
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
            { text: 'Alex', value: 2, color: '#FF7272' },
        ],
        multiple: true,
        field: 'personIds',
        valueField: 'value',
        textField: 'text',
        colorField: 'color',
    },
]);
</script>
