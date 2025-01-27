<template>
     <kendo-datetimepicker :min="minDate"
                        :max="maxDate"
                        :value="currentDate"
                        :format="'yyyy/MM/dd hh:mm'"
                        style="width: 250px">
    </kendo-datetimepicker>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datetimepicker': DateTimePicker
  },
  data: function () {
    return {
         minDate: new Date(2017, 9, 1),
        maxDate: new Date(2017, 10, 1),
        currentDate: new Date()
    };
  }
}
</script>
