<template>
  <div>
    <ColorPalette :palette="'office'" @change="onChange" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPalette } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

const events = ref([]);

const onChange = (e) => {
    events.value.unshift(
        `Change event triggered. Current ColorPalette value is: HEX: ${e.value}; RGB: ${e.rgbaValue}`
    );
};
</script>
