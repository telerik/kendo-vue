<template>
  <FloatingLabel
    :editor-id="editorId"
    :editor-value="value"
    :label="'Home Address:'"
  >
    <KInput
      :style="{ width: '230px' }"
      :id="editorId"
      :placeholder="placeholder"
      @change="onChange"
    />
  </FloatingLabel>
</template>

<script setup>
import { ref } from "vue";
import { FloatingLabel } from "@progress/kendo-vue-labels";
import { Input as KInput } from "@progress/kendo-vue-inputs";

const editorId = "homeaddress";
const placeholder = "e.g.: Dublin blvd";
const value = ref(undefined);

function onChange(e) {
    value.value = e.value;
}
</script>

