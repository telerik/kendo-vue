<template>
   <Scheduler 
        :data-items="sampleData" 
        :default-date="displayDate" 
        :views="views"
        :item="'itemRender'"
        :slot-render="'slotRender'"
        :task="'taskRender'"
        :editable="editable"
        :modifyInitialFormValues="modifyInitialFormValues"
        :validator="validator"
        @datachange="handleDataChange"
    >
     <template v-slot:itemRender="{props, listeners}">
            <SchedulerItem 
                v-bind="props"
                v-on="listeners"
                :style="{
                    backgroundColor: 'red'
                }"
            >
            <div class="k-event-template">
                {{props.title}}
            </div>
           
            </SchedulerItem>
        </template>
            <template v-slot:slotRender="{props, listeners}">
            <SchedulerSlot 
                v-bind="props"
                v-on="listeners"
                :style="{
                    borderBottom: props.isAllDay ? '1px solid red' : undefined,
                }"
                @showmoreitems="props.onShowmoreitems"
            >
            </SchedulerSlot>
        </template>
        <template v-slot:taskRender="{ props, listeners}"
      >
        <SchedulerTask
          v-bind="props"
          v-on="listeners"
          :class="'agenda-task'"
        >
        </SchedulerTask>
      </template>
    </Scheduler>
</template>
<script>
import { displayDate, sampleData } from "./events-utc";
import { guid } from "@progress/kendo-vue-common";
import { Scheduler, SchedulerItem, SchedulerSlot, SchedulerTask } from '@progress/kendo-vue-scheduler';

export default {
    components: {
        Scheduler,
        SchedulerItem,
        SchedulerSlot,
        SchedulerTask
    },
    data () {
        return {
            editable: {
                add: true,
                remove: true,
                drag: false,
                resize: false,
                select: false,
                edit: true,
            },
            views: [
            { name: 'day' },
            { name: 'agenda' },
            { name: 'timeline', title: 'custom TimeLine', columnWidth: 50, workDayStart: '12:00' },
            { name: 'Week', title: 'Custom Week' },
            { name: 'workWeek' },
            { name: 'month' },
        ],
            sampleData,
            displayDate
        };
    },
    methods: {
        validator(formValueGetter) {
            const descValue = formValueGetter('description');

            return {
                description: descValue ? undefined : 'add description'
            }
        },
         modifyInitialFormValues(dataItem) {
            return dataItem.title === undefined ? {
            ...dataItem,
            title: 'no title'
            } : dataItem;
        },
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
