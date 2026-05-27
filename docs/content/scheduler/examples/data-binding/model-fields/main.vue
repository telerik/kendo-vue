<template>
  <div>
    <Scheduler
      :data-items="data"
      :default-date="displayDate"
      :view="view"
      :views="views"
      :model-fields="modelFields"
    />
  </div>
</template>

<script setup>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { ref } from 'vue';

const displayDate = ref(new Date('2019-08-26T21:00:00.000Z'));
const data = ref([
    {
        TaskID: 0,
        Subject: 'Breakfast with Tom',
        Start: new Date('2019-08-27T05:30:00.000Z'),
        End: new Date('2019-08-27T06:00:00.000Z'),
    },
    {
        TaskID: 1,
        Subject: 'Lunch with Loren',
        Start: new Date('2019-08-27T09:00:00.000Z'),
        End: new Date('2019-08-27T10:00:00.000Z'),
    },
]);
const modelFields = {
    id: 'TaskID',
    title: 'Subject',
    start: 'Start',
    end: 'End',
};
const view = ref('day');
const views = [
    {
        name: 'day',
        title: 'Day',
    },
];
</script>
