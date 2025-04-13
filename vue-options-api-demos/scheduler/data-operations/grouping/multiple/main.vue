<template>
    <Scheduler
        :style="{ height: '700px' }"
        :data-items="data"
        :default-date="defaultDate"
        :views="views"
        :group="group"
        :resources="resources"
        :timezone="'Etc/UTC'"
    ></Scheduler>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { data, defaultDate } from './data';

export default {
    components: {
        Scheduler,
    },
    data() {
        return {
            views: [{ name: 'day', title: 'Day' }],
            data,
            defaultDate,
            group: {
                resources: ['Rooms', 'Persons'],
                orientation: 'horizontal',
            },
            resources: [
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
                    // We're changing the name from `Person` to `Persons`.
                    name: 'Persons',
                    data: [
                        { text: 'Peter', value: 1, color: '#5392E4' },
                        { text: 'Alex', value: 2, color: '#FF7272' },
                    ],
                    multiple: true,
                    // We're changing the field from `personId` to `PersonIds`.
                    field: 'personIds',
                    valueField: 'value',
                    textField: 'text',
                    colorField: 'color',
                },
            ],
        };
    },
};
</script>
