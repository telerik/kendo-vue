<template>
  <div>
    <ColorPicker
      :default-value="'rgba(237, 126, 50, 1)'"
      @activecolorclick="onActiveColorClick"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

const events = ref([]);

const onActiveColorClick = (e) => {
    events.value.unshift(
        `ActiveColorClick event triggered. Current ColorPicker value is: ${e.value}`
    );
};

const onBlur = () => {
    events.value.unshift("Blur event triggered.");
};

const onChange = (e) => {
    events.value.unshift(
        `Change event triggered. Current ColorPicker value is: HEX: ${e.event.value}; RGB: ${e.event.rgbaValue}`
    );
};

const onFocus = () => {
    events.value.unshift("Focus event triggered.");
};
</script>
