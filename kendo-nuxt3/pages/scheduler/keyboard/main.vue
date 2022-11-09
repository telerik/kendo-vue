<template>
   <Scheduler 
        :data-items="sampleData" 
        :default-date="displayDate" 
        :views="views"
        :editable="editable"
        @datachange="handleDataChange"
    >
    </Scheduler>
</template>
<script lang="ts">
import { displayDate, sampleData } from "./events-utc";
import { guid } from "@progress/kendo-vue-common";
import { Scheduler } from '@progress/kendo-vue-scheduler';

export default {
    components: {
        Scheduler
    },
    data () {
        return {
            editable: {
                add: true,
                remove: true,
                drag: true,
                resize: true,
                select: true,
                edit: true,
            },
            views: [
            { name: 'day' },
            { name: 'month' },
            { name: 'agenda' },
            { name: 'timeline', title: 'custom TimeLine', columnWidth: 50, workDayStart: '12:00' },
            { name: 'Week', title: 'Custom Week' },
            { name: 'workWeek' }
        ],
            sampleData,
            displayDate
        };
    },
    methods: {
        handleDataChange ({ created, updated, deleted }){
            console.log('handleDataChange', created, updated, deleted);
            const newData = [...this.sampleData] // Filter the deleted items
                .filter(
                (item) =>
                    deleted.find((current) => current.id === item.id) === undefined
                ) // Find and replace the updated items
                .map(
                (item) => updated.find((current) => current.id === item.id) || item
                ) // Add the newly created items and assign an `id`.
                .concat(
                    created.map((item) =>
                        Object.assign({}, item, {
                        id: guid(),
                        })
                    )
                );
            
            this.sampleData = newData;
        }
    }
}
</script>
