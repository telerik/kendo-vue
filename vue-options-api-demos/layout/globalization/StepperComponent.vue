
<template>
  <Stepper :value="value" @change="handleChange" :items="items" :dir="'rtl'" />
</template>

<script>
import { Stepper } from "@progress/kendo-vue-layout";
export default {
  components: {
    Stepper,
  },
  data() {
    return {
      value: 0,
      items: [
        {
          label: "Account Info",
          icon: "lock",
        },
        {
          label: "Personal Info",
          icon: "user",
        },
        {
          label: "Payment Details",
          icon: "track-changes",
          optional: true,
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