<template>
    <kendo-datepicker   :value="today"
                        :week-number="true"                        
                        :month="month"
                        :footer="footer"                        
                        ></kendo-datepicker>
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
import { DatePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datepicker': DatePicker
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
