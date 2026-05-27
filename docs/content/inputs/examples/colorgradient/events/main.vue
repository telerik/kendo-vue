<template>
  <div>
    <ColorGradient @change="onChange" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorGradient } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

const events = ref([]);

const onChange = (e) => {
    events.value.unshift(
        `Change event triggered. Current ColorGradient value is: HEX: ${e.value}, RGBA: ${e.rgbaValue}`
    );
};
</script>
