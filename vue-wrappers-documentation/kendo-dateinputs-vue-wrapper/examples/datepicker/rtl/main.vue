<template>
      <div class="row k-rtl" >
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h5>Please select date:</h5>
                <kendo-datepicker
                     :value="currentDate">
                </kendo-datepicker>
            </div>
        </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datepicker': DatePicker
  },
  data: function () {
    return {
       currentDate: new Date()
    };
  }
}
</script>
