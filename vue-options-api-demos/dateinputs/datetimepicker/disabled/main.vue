<template>
   <div class="row">
            <p>Today's date:</p>
                <datetimepicker :style="{ width: '260px' }" :disabled="true" :value="new Date()" :show="true" />
        </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datetimepicker': DateTimePicker
    }
};

</script>
