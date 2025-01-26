<template>
     <h5>Select date: </h5>
    <kendo-datetimepicker :min="minDate"
                      :max="maxDate"
                      :value="currentDate"
                      :format="'yyyy/MMMM/dd'"></kendo-datetimepicker>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datetimepicker': DateTimePicker
  },
  data: function () {
    return {
         date: null,
        minDate: new Date(2017, 9, 1),
        maxDate: new Date(2018, 10, 30),
        currentDate: null
    };
  }
}
</script>
