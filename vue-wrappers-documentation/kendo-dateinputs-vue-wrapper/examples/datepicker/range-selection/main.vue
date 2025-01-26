<template>
      <div style="display:inline-flex">
        <div style="margin-right:20px">
            <h4>Start:</h4>
            <kendo-datepicker id="start" v-on:change="startChange"></kendo-datepicker>
        </div>

        <div>
            <h4>End:</h4>
            <kendo-datepicker id="end" v-on:change="endChange"></kendo-datepicker>
        </div>    
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datepicker': DatePicker
  },
  mounted () {
            var start = $("#start").data("kendoDatePicker");
            var end = $("#end").data("kendoDatePicker");
            start.max(end.value());
            end.min(start.value());
  },
	methods: {        
		startChange: function (e) {           
            var start = $("#start").data("kendoDatePicker");
            var end = $("#end").data("kendoDatePicker");
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
            var start = $("#start").data("kendoDatePicker");
            var end = $("#end").data("kendoDatePicker");
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
