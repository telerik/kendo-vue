<template>
    <div class="row">
            <div class="col-xs-12 col-md-12 example-col">
                <p>DateTimePicker with default value</p>
                <datetimepicker :style="{ width: '260px' }"
                    :default-value="defaultValue"
                />
            </div>
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
            defaultValue: new Date()
        };
    }
};

</script>
