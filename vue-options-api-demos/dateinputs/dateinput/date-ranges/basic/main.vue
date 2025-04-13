<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <p>Only values between {{min.toDateString()}} and {{max.toDateString()}} are valid</p>
    </div>
    <div >
        <p>Select a date:</p>
        <dateinput :style="{ width: '230px' }"
            :value="value"
            :min="min"
            :max="max"
            @change="changeDate"
        />
    </div>
</div>
</template>
<script>
import { DateInput } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'dateinput': DateInput
    },
    data: function() {
        return {
            value: new Date(2017, 1, 13),
            min: new Date(2000, 2, 10),
            max: new Date(2020, 2, 10)
        };
    },
    methods: {
        changeDate(event) {
            this.value = event.value;
        }
    }
};

</script>
