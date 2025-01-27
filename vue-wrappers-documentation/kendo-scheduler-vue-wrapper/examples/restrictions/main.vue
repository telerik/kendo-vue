<template>
     <kendo-schedulerdatasource ref="remoteDataSource"
							   :data="data"
							   schema-model-id="meetingID"
							   :schema-model-fields="fields">
    </kendo-schedulerdatasource>

    <kendo-scheduler ref="scheduler"
                     data-source-ref="remoteDataSource"
					 :date="date"
					 :height="600"
					 :group="group"
                     :start-time="startTime"
                     :all-day-slot="false"
					 :timezone="'Etc/UTC'"
                     @resize="onResize"
                     @resizeend="onResizeEnd"
                     @move="onMove"
                     @moveend="onMoveEnd"
                     @add="onAdd"
                     @save="onSave">
		<kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
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
        },
        onResize: function(e) {
            if (this.roomIsOccupied(e.start, e.end, e.event, e.resources) || this.attendeeIsOccupied(e.start, e.end, e.event, e.resources)) {
                e.sender.wrapper.find(".k-marquee-color").addClass("invalid-slot");
                e.preventDefault();
            }
        },
        onResizeEnd: function(e) {
            if (!this.checkAvailability(e.start, e.end, e.events)) {
                e.preventDefault();
            }
        },
        onMove: function(e) {
            if (this.roomIsOccupied(e.start, e.end, e.event, e.resources) || this.attendeeIsOccupied(e.start, e.end, e.event, e.resources)) {
                e.sender.wrapper.find(".k-event-drag-hint").addClass("invalid-slot");
            }
        },
        onMoveEnd: function(e) {
            if (!this.checkAvailability(e.start, e.end, e.event, e.resources)) {
                e.preventDefault();
            }
        },
        onAdd: function(e) {
            if (!this.checkAvailability(e.event.start, e.event.end, e.event)) {
                e.preventDefault();
            }
        },
        onSave: function(e) {
            if (!this.checkAvailability(e.event.start, e.event.end, e.event)) {
                e.preventDefault();
            }
        },
        occurrencesInRangeByResource: function(start, end, resourceFieldName, event, resources){
            var scheduler = this.$refs.scheduler.kendoWidget();

            var occurrences = scheduler.occurrencesInRange(start, end);

            var idx = occurrences.indexOf(event);
            if (idx > -1) {
            occurrences.splice(idx, 1);
            }

            event = $.extend({}, event, resources);

            return this.filterByResource(occurrences, resourceFieldName, event[resourceFieldName]);
        },
        filterByResource: function(occurrences, resourceFieldName, value){
            var result = [];
            var occurrence;

            for(var idx = 0, length = occurrences.length; idx < length; idx++) {
                occurrence = occurrences[idx];
                if (occurrence[resourceFieldName] === value) {
                    result.push(occurrence);
                }
            }
            return result;
        },
        attendeeIsOccupied: function (start, end, event, resources) {
            var occurrences = this.occurrencesInRangeByResource(start, end, "attendee", event, resources);
            if (occurrences.length > 0) {
                return true;
            }
            return false;
        },
        roomIsOccupied: function (start, end, event, resources) {
            var occurrences = this.occurrencesInRangeByResource(start, end, "roomId", event, resources);
            if (occurrences.length > 0) {
                return true;
            }
            return false;
        },
        checkAvailability: function (start, end, event, resources) {

            if (this.attendeeIsOccupied(start, end, event, resources)) {
                setTimeout(function() {
                    alert("This person is not available in this time period.");
                }, 0);

                return false;
            }

            if (this.roomIsOccupied(start, end, event, resources)) {
                setTimeout(function() {
                    alert("This room is not available in this time period.");
                }, 0);

                return false;
            }

            return true;
        }

    },
    data () {
        return {
            date: new Date('2018/6/13'),
            startTime: new Date("2018/6/13 07:00 AM"),
            data: [
                {
                    meetingID: 1,
                    title: "Call Charlie about the project",
                    start: new Date("2018/6/13 10:30"),
                    end: new Date("2018/6/13 11:30"),
                    roomId: 1,
                    attendee: 1
                },
                {
                    meetingID: 2,
                    title: "Performance review",
                    start: new Date("2018/6/13 9:00"),
                    end: new Date("2018/6/13 12:30"),
                    roomId: 2,
                    attendee: 2
                },
                {
                    meetingID: 3,
                    title: "HR Lecture",
                    start: new Date("2018/6/13 13:00"),
                    end: new Date("2018/6/13 14:30"),
                    roomId: 1,
                    attendee: 2
                }
            ],
            fields: {
                meetingID: { type: "number" },
                title: { defaultValue: "No title", validation: { required: true } },
                start: { type: "date" },
                end: { type: "date" },
                roomId: { nullable: true },
                attendee: { defaultValue: 1 },
                isAllDay: { type: "boolean" }
            },
            group: {
                resources: ["Rooms"]
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