<template>
     <kendo-datetimepicker   :value="today"
                            :week-number="true"                        
                            :month="month"
                            :footer="footer"                        
                            ></kendo-datetimepicker>
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
import { DateTimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datetimepicker': DateTimePicker
  },
   data() {
        return{    
            today: new Date(),           
            month: {              
              content: '<div class="custom">#= data.value #</div>' ,
              weekNumber:  '<div class="italic">#= data.weekNumber #</div>'
            },
            footer: "Today - #=kendo.toString(data, 'd') #"
       }
    }
}
</script>
