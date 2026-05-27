<template>
  <Scheduler
    :style="{ height: '700px' }"
    :data-items="data"
    :default-date="defaultDate"
    :views="views"
    :show-work-hours="false"
  />
</template>

<script setup>
import { ref } from 'vue';
import '@progress/kendo-date-math/tz/America/New_York';
import { Scheduler } from '@progress/kendo-vue-scheduler';

const views = ref([{ name: 'day', title: 'Day' }]);
const defaultDate = ref(new Date('2019-08-27T08:00:00.000Z'));
const data = ref([
    {
        id: 0,
        title: 'Breakfast with Tom',
        start: new Date('2019-08-27T08:30:00.000Z'),
        end: new Date('2019-08-27T09:00:00.000Z'),
    },
]);
</script>
