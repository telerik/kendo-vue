<template>
       <kendo-datepicker :min="minDate"
                      :max="maxDate"
                      :value="currentDate"
                      :format="'yyyy/MM/dd'">
    </kendo-datepicker>
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
        maxDate: new Date(2017, 10, 1),
        currentDate: new Date(2017, 9, 15)
    };
  }
}
</script>
