<template>
     <kendo-scheduler :data-source="localDataSource"
					 :date="date"
					 :height="600"
					 :timezone="'Etc/UTC'"
					 :resources="resources">
		<kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
		<kendo-scheduler-view :type="'workWeek'" :selected="true"></kendo-scheduler-view>
		<kendo-scheduler-view :type="'week'"></kendo-scheduler-view>
		<kendo-scheduler-view :type="'month'"></kendo-scheduler-view>
		<kendo-scheduler-view :type="'agenda'"></kendo-scheduler-view>
    </kendo-scheduler>
</template>
<script>
import { Scheduler, SchedulerView } from '@progress/kendo-scheduler-vue-wrapper';

export default {
    components: {
        'kendo-scheduler': Scheduler,
        'kendo-scheduler-view': SchedulerView
    },
    data: function (){
        return {
            date: new Date('2013/6/6'),
            localDataSource: [
                {
                    id: 1,
                    start: new Date("2013/6/6 11:00 AM"),
                    end: new Date("2013/6/6 1:00 PM"),
                    title: "Meeting with investors",
                    roomId: 1 // The unique identifier of the first room (Meeting Room 101)
                },
                {
                    id: 2,
                    start: new Date("2013/6/6 10:15 AM"),
                    end: new Date("2013/6/6 12:30 PM"),
                    title: "Job Interview",
                    roomId: 2 // The unique identifier of the second room (Meeting Room 102)
                }
            ],
            resources: [
            {
                field: "roomId", // The field of the Scheduler event which contains the resource identifier.
                title: "Room", // The label displayed in the Scheduler edit form for this resource.
                dataSource: [
                    {
                        text: "Meeting Room 101", // Text of the resource instance
                        value: 1, // The identifier of the resource instance. Use that value to assign an event to this instance.
                        color: "#1c9ec4" // Used as the background of events assigned to this resource.
                    },
                    { text: "Meeting Room 102", value: 2, color: "#ff7663" }
                ]
            }]
        };
	}
}
</script>