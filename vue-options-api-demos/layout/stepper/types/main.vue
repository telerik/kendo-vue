<template>
   <Stepper :value="value" @change="handleChange" :items="items" />
</template>

<script>
import {
 Stepper
    } from '@progress/kendo-vue-layout';
export default {
    components: {
       Stepper
    },
    data () {
      return {
        value: 0,
        items: [
            {
                label: "Success Step",
                isValid: true,
            },
            {
                label: "Error Step",
                isValid: false,
            },
            {
                label: "Disabled Step",
                disabled: true,
            },
            {
                label: "Optional Step",
                optional: true,
            },
        ]
      };
    },
    methods: {
      handleChange (e) {
        this.value = e.value;
      }
    }
};
</script>