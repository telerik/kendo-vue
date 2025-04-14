<template>
    <div>
        <Scheduler :data-items="sampleData" :default-date="displayDate" :view="view" :views="views"></Scheduler>
    </div>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

export default {
    components: {
        Scheduler,
    },

    data() {
        return {
            sampleData,
            displayDate,
            view: 'agenda',
            views: [
                {
                    name: 'agenda',
                    title: 'Agenda View',
                    step: 2,
                    numberOfDays: 2,
                    selectedDateFormat: 'From: {0:D} To: {1:D}',
                    selectedShortDateFormat: 'From: {0:d} To: {1:d}',
                },
            ],
        };
    },
};
</script>
