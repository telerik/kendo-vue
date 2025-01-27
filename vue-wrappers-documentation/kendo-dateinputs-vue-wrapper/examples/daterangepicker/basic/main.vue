<template>
    <h5>Select date: </h5>
    <kendo-daterangepicker :min="minDate"
                           :max="maxDate"
                           :range="currentRange"
                           :format="'yyyy/MMMM/dd'">
    </kendo-daterangepicker>
</template>
<script>
import { DateRangePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-daterangepicker': DateRangePicker
  },
  data: function () {
    return {
        minDate: new Date(2017, 9, 1),
        maxDate: new Date(2018, 10, 30),
        currentRange: {start: new Date(2017, 9, 4), end: new Date(2018, 10, 22)}
    };
  }
}
</script>
