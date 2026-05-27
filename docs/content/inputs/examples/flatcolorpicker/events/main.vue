<template>
  <div>
    <FlatColorPicker @viewchange="onViewChange" @change="onChange" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FlatColorPicker } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

const events = ref([]);

const onViewChange = (e) => {
    events.value.unshift(
        `FlatColorPickerViewChangeEvent triggered. Current view is ${e.viewType}`
    );
};

const onChange = (e) => {
    events.value.unshift(
        `Change event triggered. Current ColorPicker value is: HEX: ${e.value}; RGB: ${e.rgbaValue}`
    );
};
</script>
