<template>
     <kendo-daterangepicker :start="'century'"
                      :depth="'year'"
                      ></kendo-daterangepicker>   
</template>
<script>
import { DateRangePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-daterangepicker': DateRangePicker
  }
}
</script>
