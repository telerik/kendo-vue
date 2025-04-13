<template>
        <div class="row">
            <div class="col-xs-12 col-md-12 example-col">
                <p>TimePicker with default value</p>
                <timepicker :style="{ width: '230px' }"
                    :default-value="defaultValue"
                />
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
            defaultValue: new Date()
        };
    }
};

</script>
