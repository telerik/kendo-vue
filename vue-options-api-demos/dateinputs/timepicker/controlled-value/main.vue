<template>
   <div class="row">
            <div class="example-config col-xs-12 col-md-12 example-col">
                <p>The value is: {{`${value}`}}</p>
            </div>
            <div class="col-xs-12 col-md-12 example-col">
                <p>Controlled TimePicker</p>
                <timepicker :style="{ width: '230px' }"
                    :value="value"
                    @change="handleChange"
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
            value: new Date()
        };
    },
    methods: {
        handleChange (event) {
            this.value = event.target.value;
        }
    }
};

</script>
