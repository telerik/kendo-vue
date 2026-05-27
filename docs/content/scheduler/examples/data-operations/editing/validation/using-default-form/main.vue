<template>
  <Scheduler
    :data-items="data"
    :default-date="displayDate"
    :views="views"
    :view="defaultView"
    :resources="resources"
    :validator="validator"
    :editable="editable"
    @datachange="handleDataChange"
  />
</template>

<script setup>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { guid } from '@progress/kendo-vue-common';
import { sampleData, displayDate } from './events-utc';
import { ref } from 'vue';

const data = ref(sampleData);
const defaultView = ref('day');
const editable = {
    add: true,
    remove: true,
    drag: false,
    resize: false,
    select: false,
    edit: true,
};
const views = [
    { name: 'timeline' },
    { name: 'month' },
    { name: 'day' },
    { name: 'week' },
    { name: 'workweek' },
    { name: 'agenda' },
];
const resources = [
    {
        name: 'Rooms',
        data: [
            { text: 'Meeting Room 101', value: 1, color: 'orange' },
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
            { text: 'Alex', value: 2, color: 'blue' },
        ],
        field: 'personId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color',
    },
];

function validator(formValueGetter) {
    const desc = formValueGetter('description');
    const roomId = formValueGetter('roomId');
    return {
        description: desc ? undefined : 'Please add event description',
        roomId: roomId ? undefined : 'Please select a room for the event',
    };
}

function handleDataChange({ created, updated, deleted }) {
    const newData = [...data.value]
        .filter(
            (item) =>
                deleted.find((current) => current.id === item.id) === undefined
        )
        .map(
            (item) =>
                updated.find((current) => current.id === item.id) || item
        )
        .concat(
            created.map((item) =>
                Object.assign({}, item, {
                    id: guid(),
                })
            )
        );

    data.value = newData;
}
</script>
