<template>
     <kendo-daterangepicker :week-number="true"></kendo-daterangepicker> 
</template>
<script>
import { DateRangePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-daterangepicker': DateRangePicker
  }
}
</script>
