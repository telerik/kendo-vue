<template>
   <div class="example-config">
        <p>Select a date:</p>
        <datetimepicker :style="{ width: '260px' }"
            :min-time="min"
            :max-time="max"
            :default-value="defaultValue"
        ></datetimepicker>
    </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datetimepicker': DateTimePicker
    },
    data () {
        return {
              minTime: new Date(2000, 1, 1, 8, 30),
              maxMax: new Date(2000, 1, 1, 17, 30),
              defaultValue: new Date(2019, 10, 8, 8, 15)
        };
    }
};

</script>
