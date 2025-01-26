<template>
      <div style="display:inline-flex">
        <div style="margin-right:20px">
            <h4>Start:</h4>
            <kendo-datetimepicker id="start"
                :value="today"
                :parse-format="['MM/dd/yyyy']"
                v-on:change="startChange"></kendo-datetimepicker>
        </div>

        <div>
            <h4>End:</h4>
            <kendo-datetimepicker id="end" v-on:change="endChange"  
                :value="today"
                :parse-format="['MM/dd/yyyy']"></kendo-datetimepicker>
        </div>    
    </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
    components: {
        'kendo-datetimepicker': DateTimePicker
    },
    data(){
        return {
            today: new Date()
        };
    },
    mounted () {
            var start = $("#start").data("kendoDateTimePicker");
            var end = $("#end").data("kendoDateTimePicker");
            start.max(end.value());
            end.min(start.value());
    },
	methods: {        
		startChange: function (e) {           
            var start = $("#start").data("kendoDateTimePicker");
            var end = $("#end").data("kendoDateTimePicker");
			var startDate = start.value(),
                endDate = end.value();
            if (startDate) {
                    startDate = new Date(startDate);
                    startDate.setDate(startDate.getDate());
                    end.min(startDate);
                } else if (endDate) {
                    start.max(new Date(endDate));
                } else {
                    endDate = new Date();
                    start.max(endDate);
                    end.min(endDate);
            }
		},
		endChange: function (e) {
            var start = $("#start").data("kendoDateTimePicker");
            var end = $("#end").data("kendoDateTimePicker");
			var endDate = end.value(),
                startDate = start.value();
            if (endDate) {
                    endDate = new Date(endDate);
                    endDate.setDate(endDate.getDate());
                    start.max(endDate);
                } else if (startDate) {
                    end.min(new Date(startDate));
                } else {
                    endDate = new Date();
                    start.max(endDate);
                    end.min(endDate);
            }
		}
	}
}
</script>
