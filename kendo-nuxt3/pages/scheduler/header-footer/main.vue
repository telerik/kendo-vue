<template>
<div>
    <button @click="handleClick">add Event</button>
   <Scheduler :data-items="sampleData" :default-date="displayDate" :views="views"
    :header="'headerRender'"
    :footer="'footerRender'"
    @itemclick="handleItemClick"
    @itemdoubleclick="handleItemDoubleClick"
    @slotclick="handleSlotClick"
    @slotdoubleclick="handleSlotDoubleClick"
    @taskclick="handleTaskClick"
    @taskdoubleclick="handleTaskDoubleClick"
    >
     <template v-slot:headerRender="{props}">
        <SchedulerHeader>
              <SchedulerNavigation
                    @prevclick="props.onPrevclick"
                    @nextclick="props.onNextclick"
                    @todayclick="props.onTodayclick"
                 />   
                something
                <NavigationDatePicker
                :value="props.currentDate"
                @change="props.onDatepickerchange"
                        />
                before Spacer
                 <ToolbarSpacer />
                   after Spacer
                <SchedulerViewSelector />
        </SchedulerHeader>
        </template>
        <template v-slot:footerRender="{props}">
         <SchedulerFooter>
            <BusinessHours :slot-duration="props.slotDuration" @click="props.onShowworkhoursclick"/>
            custom content
        </SchedulerFooter>
        </template>
       
    </Scheduler>
    </div>
</template>
<script lang="ts">
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import { ToolbarSpacer } from '@progress/kendo-vue-buttons';
import { Scheduler, SchedulerHeader,
 SchedulerFooter, BusinessHours, SchedulerNavigation, NavigationDatePicker, SchedulerViewSelector } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from "./events-utc";

export default {
    components: {
        Scheduler,
        SchedulerHeader,
        SchedulerFooter,
        BusinessHours,
        SchedulerNavigation,
        NavigationDatePicker,
        SchedulerViewSelector,
        ToolbarSpacer
    },
    data () {
        return {   
            views: [
              { name: 'Week', title: 'Custom Week' },
               { name: 'day' },
            { name: 'workweek' },
            { name: 'month' },
            { name: 'agenda' },
              { name: 'timeline', title: 'custom TimeLine', columnWidth: 50, workDayStart: '12:00' }
        ],
            sampleData,
            displayDate
        };
    },
    methods: {
        changeBusinessHours() {
            this.views[0].businessHours = !this.views[0].businessHours;
        },
        handleClick() {

        },
        otherClick(){
          console.log('otherClick')   
        },
        handleItemClick(args) {
            console.log('itmeclick', args)    
            const updatedItem = this.sampleData.find(item=>item.id === args.target.props.uid);
            updatedItem.title = 'new Title';
        },
        handleItemDoubleClick(args) {
            console.log('itmedoubleclick', args)
        },
        handleSlotClick(args) {
            console.log('slotclick', args)
        },
        handleSlotDoubleClick(args) {
            console.log('slotdoubleclick', args)
        },
        handleTaskClick(args) {
            console.log('taskclick', args)
        },
        handleTaskDoubleClick(args) {
            console.log('taskdoubleclick', args)
        }
    }
}
</script>
