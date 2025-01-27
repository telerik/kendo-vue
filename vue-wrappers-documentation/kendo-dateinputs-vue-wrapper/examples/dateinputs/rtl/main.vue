<template>
      <div class="row k-rtl" >
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h5>Please select date:</h5>
                <kendo-dateinput
                     :value="currentDate">
                </kendo-dateinput>
            </div>
        </div>
</template>
<script>
import { DateInput } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-dateinput': DateInput
  },
  data: function () {
    return {
		  currentDate: new Date()
    };
  }
}
</script>
