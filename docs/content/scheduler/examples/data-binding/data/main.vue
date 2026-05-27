<template>
  <div>
    <Scheduler
      :data-items="data"
      :default-date="displayDate"
      :view="view"
      :views="views"
      timezone="Etc/UTC"
    />
  </div>
</template>

<script setup>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { ref } from 'vue';

const displayDate = ref(new Date('2019-08-27T08:00:00.000Z'));
const data = ref([
    {
        id: 0,
        title: 'Breakfast with Tom',
        start: new Date('2019-08-27T08:30:00.000Z'),
        end: new Date('2019-08-27T09:00:00.000Z'),
    },
]);
const view = ref('day');
const views = [
    {
        name: 'day',
        title: 'Day',
    },
];
</script>
