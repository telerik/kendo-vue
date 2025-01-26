<template>
     <kendo-scheduler :data-source="localDataSource"
					 :date="date"
					 :height="600"
                     :selectable="true"   
					 :show-work-hours="true"                 
					 :timezone="'Etc/UTC'">
      <kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'workWeek'" :selected="true"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'week'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'month'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'agenda'"></kendo-scheduler-view>
    </kendo-scheduler>
</template>
<script>
import { Scheduler, SchedulerView } from '@progress/kendo-scheduler-vue-wrapper';
import { KendoSchedulerDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-scheduler': Scheduler,
        'kendo-scheduler-view': SchedulerView,
        'kendo-schedulerdatasource': KendoSchedulerDataSource
    },
    data: function (){
        return {
            date: new Date('2018/6/6'),
            startTime: new Date("2018/6/13 11:00 AM"),
            localDataSource: [
                {
                id: 1,
                start: new Date("2018/6/6 08:00 AM"),
                end: new Date("2018/6/6 09:00 AM"),
                title: "Interview"
                },
                {
                id: 2,
                start: new Date("2018/6/6 08:00 AM"),
                end: new Date("2018/6/6 09:00 AM"),
                title: "Meeting"
                }
            ]
        };
	}
}
</script>