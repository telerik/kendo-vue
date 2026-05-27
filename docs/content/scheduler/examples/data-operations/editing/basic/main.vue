<template>
  <Scheduler
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    :view="view"
    :editable="editable"
    @datachange="handleDataChange"
  />
</template>

<script setup>
import { displayDate, sampleData as data } from './events-utc';
import { guid } from '@progress/kendo-vue-common';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { ref } from 'vue';

const sampleData = ref(data);
const view = ref('day');
const editable = {
    add: true,
    remove: true,
    drag: true,
    resize: true,
    edit: true,
};
const views = [
    { name: 'day' },
    { name: 'timeline' },
    { name: 'week' },
    { name: 'agenda' },
];

function handleDataChange({ created, updated, deleted }) {
    const newData = [...sampleData.value]
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

    sampleData.value = newData;
}
</script>
