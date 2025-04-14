<template>
  <div>
        <div >
            <p>Select a date:</p>
            <datepicker :style="{ width: '230px' }"
                :min="min"
                :max="max"
                :default-value="defaultValue"
            ></datepicker>
        </div>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datepicker': DatePicker
    },
    data: function() {
      return {
          min: new Date(2000, 2, 10),
          max: new Date(2002, 2, 10),
          defaultValue: new Date(2001, 2, 10)
      };
    }
};

</script>
