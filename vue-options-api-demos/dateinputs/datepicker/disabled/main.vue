<template>
<div class="row">
        <div class="col-xs-12 col-md-12 example-col">
            <p>Today's date:</p>
            <datepicker :style="{ width: '230px' }"
                :disabled="true" 
                :value="defaultValue" 
                :show="true"
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
            defaultValue: new Date()
        };
    }
};

</script>
