<template>
     <kendo-timepicker :value="currentDate"
                         :interval="15">
   </kendo-timepicker>
</template>
<script>
import { TimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-timepicker': TimePicker
  },
  data: function () {
    return {
       currentDate: new Date(2018, 10, 10, 10, 0, 0)
    };
  }
}
</script>
