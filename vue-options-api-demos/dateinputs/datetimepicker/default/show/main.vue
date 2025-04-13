<template>
    <div class="row">
            <div class="col-xs-12 col-md-12 example-col">
                <p>DateTimePicker with default show</p>
                <datetimepicker :style="{ width: '260px' }"
                    :default-show="defaultShow"
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
            defaultShow: true
        };
    }
};

</script>
