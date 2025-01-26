<template>
     <h5>Select date: </h5>
    <kendo-datepicker :min="minDate"
                      :max="maxDate"
                      :value="currentDate"
                      :format="'yyyy/MMMM/dd'"></kendo-datepicker>
</template>
<script>
import { DatePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datepicker': DatePicker
  },
  data: function () {
    return {
        minDate: new Date(2017, 9, 1),
        maxDate: new Date(2018, 10, 30),
        currentDate: new Date(2018, 8, 10)
    };
  }
}
</script>
