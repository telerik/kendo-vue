<template>
   <div class="example-wrapper">
                <datetimepicker :style="{ width: '260px' }"
                    :default-value="value"
                />
                <p>(use Alt+<code>↓</code> to open the calendar, <code>←</code> and <code>→</code> to navigate, <code>↑</code> to increment and <code>↓</code> to decrement the value)</p>
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
           value: new Date(2020, 2, 10)
        };
    }
};

</script>
