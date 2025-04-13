<template>
  <Stepper :value="value" @change="handleChange" :items="items" />
</template>

<script>
import { Stepper } from "@progress/kendo-vue-layout";

import {
  cartIcon,
  dollarIcon,
  eyeIcon,
  mapMarkerIcon,
  trackChangesAcceptIcon,
} from "@progress/kendo-svg-icons";
export default {
  components: {
    Stepper,
  },
  data() {
    return {
      value: 0,
      items: [
        {
          label: "Cart",
          svgIcon: cartIcon,
        },
        {
          label: "Delivery Address",
          svgIcon: mapMarkerIcon,
        },
        {
          label: "Payment Method",
          svgIcon: dollarIcon,
        },
        {
          label: "Preview",
          svgIcon: eyeIcon,
          optional: true,
        },
        {
          label: "Finish Order",
          svgIcon: trackChangesAcceptIcon,
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      this.value = e.value;
    },
  },
};
</script>
