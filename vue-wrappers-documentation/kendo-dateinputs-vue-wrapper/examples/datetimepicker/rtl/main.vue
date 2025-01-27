<template>
      <div class="row k-rtl" >
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h5>Please select date:</h5>
                <kendo-datetimepicker
                     :value="currentDate">
                </kendo-datetimepicker>
            </div>
        </div>
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
