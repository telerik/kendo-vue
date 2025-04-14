<template>
    <div class="example-config">
        <p>Select a date:</p>
            <datetimepicker :style="{ width: '260px' }"
            :min="min"
            :max="max"
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
            min: new Date(2001, 2, 10, 12, 30),
            max: new Date(2002, 2, 10, 12, 30),
            defaultValue: new Date(2001, 2, 10, 12, 45)
        };
    }
};

</script>
