<template>
    <div class="example-wrapper">
            <div class="col-xs-12 col-sm-6 example-col">
                <p>Select a long time:</p>
                <timepicker :style="{ width: '230px' }"
                    :format="'HH:mm:ss'"
                    :default-value="defaultValue"
                />
            </div>

            <div class="col-xs-12 col-sm-6 example-col">
                <p>Select a short time:</p>
                <timepicker :style="{ width: '230px' }"
                    :format="'hh:mm a'"
                    :default-value="defaultValue"
                />
            </div>
            <div class="col-xs-12 col-sm-6 example-col">
                <p>Custom Skeleton:</p>
                <timepicker :style="{ width: '230px' }"
                    :format="{
                        skeleton: 'EHmSs'
                    }"
                    :default-value="defaultValue"
                />
            </div>
            <div class="col-xs-12 col-sm-6 example-col">
                <p>Custom Format:</p>
                <timepicker :style="{ width: '230px' }"
                    :format="customFormat"
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
            customFormat: {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            },
            defaultValue: new Date(2000, 2, 10, 13, 30, 0)
        };
    }
};

</script>
