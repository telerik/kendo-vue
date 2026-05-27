<template>
  <FloatingLabel
    :editor-id="editorId"
    :editor-value="value"
    :optional="true"
    :label="'First Name'"
  >
    <KInput
      :style="{ width: '230px' }"
      :id="editorId"
      @change="onChange"
    />
  </FloatingLabel>
</template>

<script setup>
import { ref } from "vue";
import { FloatingLabel } from "@progress/kendo-vue-labels";
import { Input as KInput } from "@progress/kendo-vue-inputs";

const editorId = "firstName";
const value = ref(undefined);

function onChange(e) {
    value.value = e.value;
}
</script>

