<template>
<div id="vueapp" class="vue-app">
    <div>
        <div class="example-config">
            <p>Only values between {{minTime.toTimeString()}} and {{maxTime.toTimeString()}} are valid</p>
        </div>
        <div>
            <p>Select a date:</p>
            <dateinput :style="{ width: '230px' }"
                :format="'t'"
                v-model="value"
                :min-time="minTime"
                :max-time="maxTime"
            />
        </div>
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
            value: new Date(2000, 2, 10, 8, 29),
            minTime: new Date(2000, 2, 10, 8, 30),
            maxTime: new Date(2000, 2, 10, 17, 30)
        };
    }
};

</script>
