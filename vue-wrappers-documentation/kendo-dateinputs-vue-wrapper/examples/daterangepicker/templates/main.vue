<template>
    <kendo-daterangepicker :range="currentRange"
                           :month="month"
                           :week-number="true"
                           :footer="footer">
    </kendo-daterangepicker>
</template>
<style>
    .italic{
        font-style: italic;
    }
    .custom{
         font-weight: bold !important;
    }
</style>
<script>
import { markRaw } from 'vue';
import { DateRangePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-daterangepicker': DateRangePicker
  },
  data: function () {
    return {
         today: new Date(),           
            month: markRaw({              
              content: '<div class="custom">#= data.value #</div>' ,
              weekNumber:  '<div class="italic">#= data.weekNumber #</div>'
            }),
            footer: "Today - #=kendo.toString(data, 'd') #"
    };
  }
}
</script>
