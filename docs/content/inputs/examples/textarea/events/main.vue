<template>
  <div>
    <h6>Enter text:</h6>
    <TextArea
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      :rows="5"
      :style="{ width: '100%' }"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { TextArea } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

const events = ref([]);

const eventsList = computed(() => events.value);

function onChange(e) {
    events.value.unshift(
        `Change event triggered. The value of the TextArea is: ${e.value}`
    );
}

function onBlur() {
    events.value.unshift("Blur event triggered.");
}

function onFocus() {
    events.value.unshift("Focus event triggered.");
}

function onInput(e) {
    events.value.unshift(
        `Input event triggered. The value of the TextArea is: ${e.value}`
    );
}
</script>

<style>
.k-textarea {
  width: 100%;
}
</style>
