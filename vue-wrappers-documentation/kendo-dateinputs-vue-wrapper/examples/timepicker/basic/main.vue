<template>
     <h5>Selected time: {{date}}</h5>
    <kendo-timepicker v-model="date"
                      :min="min"
                      :max="max"
                      :value="value"    
                      style="width: 250px"></kendo-timepicker> 
</template>
<script>
import { TimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-timepicker': TimePicker
  },
  data: function () {
    return {
        date: null,
        value: "8:00 AM",
        min: new Date(1950, 0, 1, 8, 0, 0),
        max: new Date(2049, 11, 31, 18, 0, 0)
    };
  }
}
</script>
