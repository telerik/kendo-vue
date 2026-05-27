<template>
  <Stepper
    :value="value"
    @change="handleChange"
    :items="items"
    linear
  />
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

const value = ref(0);
const items = ref([
    { label: "Cart", svgIcon: cartIcon },
    { label: "Delivery Address", svgIcon: mapMarkerIcon },
    { label: "Payment Method", svgIcon: dollarIcon },
    { label: "Preview", svgIcon: eyeIcon, optional: true },
    { label: "Finish Order", svgIcon: trackChangesAcceptIcon },
]);

function handleChange(e) {
    value.value = e.value;
}
</script>
