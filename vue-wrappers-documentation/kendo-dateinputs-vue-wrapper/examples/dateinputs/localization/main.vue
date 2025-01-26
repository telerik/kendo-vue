<template>
      <h5>Please select date:</h5>
        <kendo-dateinput
                :format="format"
                :messages="messages">
        </kendo-dateinput>
</template>
<script>
import { DateInput } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-dateinput': DateInput
  },
  data: function () {
    return {
       format: "yyyy/MMMM/dd",         
        messages:{
            month:"____",
            year:"____",
            day:"__",
        }
    };
  }
}
</script>
