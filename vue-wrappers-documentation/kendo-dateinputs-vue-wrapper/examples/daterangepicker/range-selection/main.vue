<template>
      <div style="display:inline-flex">
        <div style="margin-right:20px">
            <h4>Start:</h4>
            <kendo-daterangepicker id="start" v-on:change="startChange"></kendo-daterangepicker>
        </div>

        <div>
            <h4>End:</h4>
            <kendo-daterangepicker id="end" v-on:change="endChange"></kendo-daterangepicker>
        </div>    
    </div>
</template>
<script>
import { DateRangePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-daterangepicker': DateRangePicker
  },
  mounted () {
            var start = $("#start").data("kendoDateRangePicker");
            var end = $("#end").data("kendoDateRangePicker");
            start.max(end.value());
            end.min(start.value());
  },
	methods: {        
		startChange: function (e) {           
            var start = $("#start").data("kendoDateRangePicker");
            var end = $("#end").data("kendoDateRangePicker");
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
            var start = $("#start").data("kendoDateRangePicker");
            var end = $("#end").data("kendoDateRangePicker");
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
