<template>
<kendo-schedulerdatasource ref="remoteDataSource"  
							   :batch="true"
							   transport-read-url="https://demos.telerik.com/kendo-ui/service/meetings"
							   transport-read-data-type="jsonp"
							   transport-update-url="https://demos.telerik.com/kendo-ui/service/meetings/update"
							   transport-update-data-type="jsonp"
							   transport-create-url="https://demos.telerik.com/kendo-ui/service/meetings/create"
							   transport-create-data-type="jsonp"
							   transport-destroy-url="https://demos.telerik.com/kendo-ui/service/meetings/destroy"
							   transport-destroy-data-type="jsonp"
							   :transport-parameter-map="parameterMap"
							   schema-model-id="meetingID"
							   :schema-model-fields="fields">
    </kendo-schedulerdatasource>

    <kendo-scheduler data-source-ref="remoteDataSource"
					 :date="date"
					 :height="600"
					 :group="group"
					 :timezone="'Etc/UTC'">
		<kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
		<kendo-scheduler-view :type="'week'" :selected="true"></kendo-scheduler-view>
		<kendo-scheduler-view :type="'month'"></kendo-scheduler-view>
		<kendo-scheduler-view :type="'timeline'"></kendo-scheduler-view>
		<kendo-scheduler-resource :field="'roomId'" :name="'Rooms'" :title="'Room'" :data-source="resourceDataSource1"></kendo-scheduler-resource>
		<kendo-scheduler-resource :field="'attendees'" :name="'Attendees'" :title="'Attendees'" multiple="true" :data-source="resourceDataSource2"></kendo-scheduler-resource>
    </kendo-scheduler>
</template>
<script>
import { Scheduler, SchedulerView, SchedulerResource } from '@progress/kendo-scheduler-vue-wrapper';
import { KendoSchedulerDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-scheduler': Scheduler,
        'kendo-scheduler-view': SchedulerView,
        'kendo-scheduler-resource': SchedulerResource,
        'kendo-schedulerdatasource': KendoSchedulerDataSource
    },
     methods: {
		parameterMap: function (options, operation) {
			if (operation !== 'read' && options.models) {
				return {models: kendo.stringify(options.models)}
			}
		}
    },    
    data () {
        return {
            date: new Date('2013/6/13'),	       
            fields: {
                meetingID: { from: 'MeetingID', type: 'number' },
                title: { from: 'Title', defaultValue: 'No title', validation: { required: true } },
                start: { type: 'date', from: 'Start' },
                end: { type: 'date', from: 'End' },
                startTimezone: { from: 'StartTimezone' },
                endTimezone: { from: 'EndTimezone' },
                description: { from: 'Description' },
                recurrenceId: { from: 'RecurrenceID' },
                recurrenceRule: { from: 'RecurrenceRule' },
                recurrenceException: { from: 'RecurrenceException' },
                roomId: { from: 'RoomID', nullable: true },
                attendees: { from: 'Attendees', nullable: true },
                isAllDay: { type: 'boolean', from: 'IsAllDay' }
            },
            group: {           
                resources: ["Rooms", "Attendees"],
                orientation: "vertical"
            },
            resourceDataSource1: [
                {
                    text: "Meeting Room 101", // Text of the resource instance
                    value: 1, // The identifier of the resource instance. Use that value to assign an event to this instance.
                    color: "#1c9ec4" // Used as the background of events assigned to this resource.
                },
                { text: "Meeting Room 102", value: 2, color: "#ff7663" }
            ],
            resourceDataSource2: [
                { text: 'Alex', value: 1, color: '#f8a398' },
                { text: 'Bob', value: 2, color: '#51a0ed' },
                { text: 'Charlie', value: 3, color: '#56ca85' }
            ]
        }
	}
}
</script>