<template>
   <kendo-timepicker :min="minDate"
                      :max="maxDate"
                      :value="currentDate"
                      :interval="15"
                      :time="'(hh:mm))'">
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
        minDate: new Date(2017, 9, 15, 2, 30),
        maxDate: new Date(2017, 9, 15, 16, 30),
        currentDate: new Date(2017, 9, 15, 10, 30)
    };
  }
}
</script>
