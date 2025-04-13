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
<script>
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
             group: {
                resources: ["Rooms", "Persons"],
                orientation: "vertical",
            },
             resources: [
          {
            name: "Rooms",
            data: [
              {
                text: "Meeting Room 101",
                value: 1,
              },
              {
                text: "Meeting Room 201",
                value: 2,
                color: "green",
              },
            ],
            field: "roomId",
            valueField: "value",
            textField: "text",
            colorField: "color",
          },
          {
            name: "Persons",
            data: [
              {
                text: "Peter",
                value: 1,
                color: "red",
              },
              {
                text: "Alex",
                value: 2,
              },
            ],
            field: "personId",
            valueField: "value",
            textField: "text",
            colorField: "color",
          },
        ],
            views: [
            { name: 'month' },
            { name: 'day' },
            { name: 'timeline', title: 'custom TimeLine', columnWidth: 50, workDayStart: '12:00' },
            { name: 'Week', title: 'Custom Week' },
            { name: 'workWeek' },
            { name: 'agenda' },
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
