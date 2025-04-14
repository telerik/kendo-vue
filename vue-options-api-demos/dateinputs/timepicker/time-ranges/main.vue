<template>
   <div>
          <div class="example-config">
              <p>Select a time:</p>
              <timepicker :style="{ width: '230px' }"
                  :min="min"
                  :max="max"
                  :default-value="defaultValue"
              ></TimePicker>
          </div>
      </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'timepicker': TimePicker
    },
    data () {
        return {
            min: new Date(2000, 2, 10, 2, 30),
            max: new Date(2010, 2, 10, 22, 15 ),
            defaultValue: new Date(2010, 2, 10, 10, 0)
        };
    }
};

</script>
