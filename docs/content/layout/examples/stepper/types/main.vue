<template>
  <Stepper :value="value" @change="handleChange" :items="items" />
</template>

<script setup>
import { ref } from "vue";
import { Stepper } from "@progress/kendo-vue-layout";

const value = ref(0);
const items = ref([
    { label: "Success Step", isValid: true },
    { label: "Error Step", isValid: false },
    { label: "Disabled Step", disabled: true },
    { label: "Optional Step", optional: true },
]);

function handleChange(e) {
    value.value = e.value;
}
</script>
