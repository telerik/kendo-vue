<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '100px' }"
    @change="onChange"
    :value="value"
  />
</template>

<script setup>
import { ref } from "vue";
import { Editor } from "@progress/kendo-vue-editor";

const tools = [["Bold", "Italic"]];
const value = ref("<p>Editor sample content</p>");

function onChange(event) {
    value.value = event.html;
}
</script>
