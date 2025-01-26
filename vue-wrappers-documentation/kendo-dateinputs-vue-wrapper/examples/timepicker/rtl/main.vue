<template>
     <div class="row k-rtl" >
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h5>Please select date:</h5>
                <kendo-timepicker
                     :value="currentDate">
                </kendo-timepicker>
            </div>
        </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-timepicker': TimePicker
  },
  data: function () {
    return {
        currentDate: new Date()
    };
  }
}
</script>
