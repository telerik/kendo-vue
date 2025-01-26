<template>
    <div style="display:inline-flex">
        <div style="margin-right:20px">
            <h4>Start time:</h4>
            <kendo-timepicker id="start" v-on:change="startTime"></kendo-timepicker>
        </div>

        <div>
            <h4>End time:</h4>
            <kendo-timepicker id="end" style="width:300px;"></kendo-timepicker>
        </div>    
    </div>    
</template>
<script>
import { TimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-timepicker': TimePicker
  },
   mounted () {
            var start = $("#start").data("kendoTimePicker");
            var end = $("#end").data("kendoTimePicker");

            start.min("8:00 AM");
            start.max("6:00 PM")
            end.min("8:00 AM");
            end.max("7:30 AM");
    },
	methods: {        
		startTime: function (e) {           
            var start = $("#start").data("kendoTimePicker");
            var end = $("#end").data("kendoTimePicker");            
			var startTime = start.value();

            if (startTime) {
                startTime = new Date(startTime);
                end.max(startTime);
                startTime.setMinutes(startTime.getMinutes() + start.options.interval);
                end.min(startTime);
                end.value(startTime);
            }
		}
	}
}
</script>
