<template>
<div id="vueapp" class="vue-app">
    <div class="col-xs-12 col-sm-6 example-col">
        <p>Incremental steps:</p>
        <p  v-for="step in Object.keys(steps)" :key="step">
        {{step}} - {{steps[step]}}
        </p>
        <dateinput :style="{ width: '230px' }"
            :format="'MM/dd/yyyy hh:mm a'"
            :steps="steps"
            v-model="value"
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
            value: new Date(2017, 2, 10, 13, 30, 0),
            steps: { year: 10, day: 5, hour: 2, minute: 15 }
        };
    }
};

</script>
