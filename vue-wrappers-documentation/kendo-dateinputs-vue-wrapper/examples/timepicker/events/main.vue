<template>
    <kendo-timepicker v-on:open="onOpen" v-on:close="onClose"></kendo-timepicker>
</template>
<script>
import { TimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-timepicker': TimePicker
  },
   methods: {
        onOpen: function (e) {
            console.log("TimePicker is opened");
        },
        onClose: function (e) {
            console.log("TimePicker is closed");
        }
    }
}
</script>
