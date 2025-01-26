<template>
     <kendo-datetimepicker :week-number="true"></kendo-datetimepicker>    
</template>
<script>
import { DateTimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datetimepicker': DateTimePicker
  }
}
</script>
