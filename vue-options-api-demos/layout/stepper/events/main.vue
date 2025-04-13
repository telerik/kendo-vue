<template>
  <div>
    <Stepper
      :value="value"
      @change="handleChange"
      @focus="onFocus"
      :items="items"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
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
import Logger from "./Logger.vue";

export default {
  components: {
    Stepper,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data() {
    return {
      events: [],
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
      this.events.unshift("Step '" + e.event.component.label + "' was clicked");
      this.value = e.value;
    },
    onFocus(e) {
      this.events.unshift("Step '" + e.target.innerText + "' was focused");
    },
  },
};
</script>