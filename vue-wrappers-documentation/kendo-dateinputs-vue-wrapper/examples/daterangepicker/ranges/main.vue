<template>
       <kendo-daterangepicker :min="minDate"
                      :max="maxDate"
                      :value="currentDate"
                      :format="'yyyy/MM/dd'">
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
        maxDate: new Date(2017, 10, 1),
        currentDate: new Date(2017, 9, 15)
    };
  }
}
</script>
