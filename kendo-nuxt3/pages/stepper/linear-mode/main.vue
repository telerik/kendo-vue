<template>
   <Stepper :value="value" @change="handleChange" :items="items" :linear="true" />
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
            label: "Cart",
            icon: "k-i-cart",
          },
          {
            label: "Delivery Address",
            icon: "k-i-marker-pin-target",
          },
          {
            label: "Payment Method",
            icon: "k-i-dollar",
          },
          {
            label: "Preview",
            icon: "k-i-preview",
            optional: true,
          },
          {
            label: "Finish Order",
            icon: "k-i-track-changes-accept",
          },
        ]
      }
    },
    methods: {
      handleChange (e) {
        this.value = e.value;
      }
    }
};
</script>

