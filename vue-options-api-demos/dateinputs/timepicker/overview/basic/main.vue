<template>
   <div class="example-wrapper">
            <timepicker :style="{ width: '230px' }" />
            <p>(use Alt+<code>↓</code> to open the time list, Tab to move to the next time section in the popup, 
                <code>↑</code> to increment and <code>↓</code> to decrement the value)</p>
        </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'timepicker': TimePicker
    }
};

</script>
