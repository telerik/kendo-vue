<template>
     <div class="row">
            <p>Today's date:</p>
                <timepicker :style="{ width: '230px' }" :disabled="true" :value="new Date()" :show="true" />
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
