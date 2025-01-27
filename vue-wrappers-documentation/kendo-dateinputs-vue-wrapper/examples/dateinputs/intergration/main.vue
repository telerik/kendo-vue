<template>
     <h5>Please select date:</h5>
      <kendo-datepicker
              :date-input="true">
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
      date: null
    };
  }
}
</script>
