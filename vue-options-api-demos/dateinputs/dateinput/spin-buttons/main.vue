<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <dateinput :style="{ width: '230px' }" 
        :spinners="true"
        :value="value"
        @change="changeDate" />
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
            value: new Date()
        };
    },
    methods: {
        changeDate(event) {
            this.value = event.value;
        }
    }
};

</script>
