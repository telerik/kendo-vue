<template>
   <div class="row">
        <div class="example-config col-xs-12 col-md-12 example-col">
            <p>The value is: {{value ? value.toDateString() : ''}}</p>
        </div>
        <div class="col-xs-12 col-md-12 example-col">
            <p>Controlled DatePicker</p>
            <datepicker :style="{ width: '230px' }"
                :value="value"
                @change="handleChange"
            />
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
            value: new Date()
        };
    },
    methods: {
        handleChange(event) {
            this.value = event.target.value;
        }
    }
};

</script>
