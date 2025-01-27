<template>
     <kendo-dateinput v-on:change="onChange"></kendo-dateinput>
</template>
<script>
import { DateInput } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-dateinput': DateInput
  },
  methods: {
      onChange: function (e) {
          var selectedValue = e.sender.value();
          console.log("New value is : " + selectedValue);
      }
  }
}
</script>
