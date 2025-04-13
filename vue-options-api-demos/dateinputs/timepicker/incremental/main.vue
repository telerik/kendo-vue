<template>
   <div class="example-wrapper">
            <p>Select a time:</p>
            <timepicker :style="{ width: '230px' }"
                :format="'HH:mm:ss'"
                :steps="steps"
                :default-value="defaultValue"
            />
            <p>(↑ to increment and ↓ to decrement the value)</p>
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
            steps: {
                hour: 2,
                minute: 15,
                second: 30
            },
            defaultValue: new Date(2000, 2, 10, 10, 30)
        };
    }
};

</script>
