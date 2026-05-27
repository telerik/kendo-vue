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
    <Logger title="Events list" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Stepper } from "@progress/kendo-vue-layout";
import {
    cartIcon,
    dollarIcon,
    eyeIcon,
    mapMarkerIcon,
    trackChangesAcceptIcon,
} from "@progress/kendo-svg-icons";
import Logger from "./Logger.vue";

const events = ref([]);
const value = ref(0);
const items = ref([
    { label: "Cart", svgIcon: cartIcon },
    { label: "Delivery Address", svgIcon: mapMarkerIcon },
    { label: "Payment Method", svgIcon: dollarIcon },
    { label: "Preview", svgIcon: eyeIcon, optional: true },
    { label: "Finish Order", svgIcon: trackChangesAcceptIcon },
]);

function handleChange(e) {
    events.value.unshift(`Step '${e.event.component.label}' was clicked`);
    value.value = e.value;
}

function onFocus(e) {
    events.value.unshift(`Step '${e.target.innerText}' was focused`);
}
</script>
