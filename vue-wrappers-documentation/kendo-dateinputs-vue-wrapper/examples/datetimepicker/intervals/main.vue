<template>
     <kendo-datetimepicker :value="currentDate"
                         :interval="15"
                         >
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
        currentDate: new Date()
    };
  }
}
</script>
