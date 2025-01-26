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
                    attendees: [2, 3] // Bob (value: 2) and Charlie (value: 3)
                },
                {
                    id: 2,
                    start: new Date("2013/6/6 10:15 AM"),
                    end: new Date("2013/6/6 12:30 PM"),
                    title: "Job Interview",
                    attendees: [1, 2] // Alex (value: 1) and Bob (value: 2)
                }
            ],
            resources: [
                {
                    field: "attendees", // The field of the Scheduler event which contains the resource identifier.
                    title: "Attendees", // The label displayed in the Scheduler edit form for this resource.
                    dataSource: [
                        {
                            text: "Alex", // Text of the resource instance.
                            value: 1, // The identifier of the resource instance. Use that value to assign an event to this instance.
                            color: "#ef701d" // Used as the background of events assigned to this resource.
                        },
                        { text: "Bob", value: 2, color: "#5fb1f7" },
                        { text: "Charlie", value: 3, color: "#35a964" }
                    ],
                    multiple: true // Indicate that this is a multiple instance resource.
                }
            ]
        };
	}
}
</script>