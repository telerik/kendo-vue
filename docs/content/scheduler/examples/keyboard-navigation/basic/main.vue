<template>
  <Scheduler
    :data-items="sampleDataRef"
    :default-date="displayDate"
    :views="views"
    :editable="editable"
    @datachange="handleDataChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { displayDate, sampleData } from './events-utc';
import { guid } from '@progress/kendo-vue-common';
import { Scheduler } from '@progress/kendo-vue-scheduler';

const editable = ref({
    add: true,
    remove: true,
    drag: true,
    resize: true,
    select: true,
    edit: true,
});

const views = ref([
    { name: 'month' },
    { name: 'day' },
    { name: 'timeline', title: 'custom TimeLine', columnWidth: 50, workDayStart: '12:00' },
    { name: 'Week', title: 'Custom Week' },
    { name: 'workWeek' },
    { name: 'agenda' },
]);

const sampleDataRef = ref(sampleData);

function handleDataChange({ created, updated, deleted }) {
    const newData = [...sampleDataRef.value]
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

    sampleDataRef.value = newData;
}
</script>
