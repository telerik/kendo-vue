<template>
      <div class="row k-rtl" >
           <div class="col-xs-12 col-sm-6 col-md-4">
              <h5>Please select date:</h5>
              <kendo-daterangepicker :range="currentRange">
              </kendo-daterangepicker>
          </div>
        </div>
</template>
<script>
import { DateRangePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-daterangepicker': DateRangePicker
  },
  data() {
        return{
            currentRange: {start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 2))},
            month: {
              content: '<div class="custom">#= data.value #</div>' ,
              weekNumber:  '<div class="italic">#= data.weekNumber #</div>'
            },
            footer: "Today - #=kendo.toString(data, 'd') #"
       }
    }
}
</script>
