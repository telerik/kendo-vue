<template>
  <Editor
    :resizable="true"
    :tools="tools"
    :default-content="content"
    :style="[{ height: '360px' }, constraints, resize]"
  />
</template>

<script setup>
import { Editor } from "@progress/kendo-vue-editor";
import content from "./content.js";

const constraints = {
    "max-height": "420px",
    "max-width": "750px",
    "min-width": "555px",
    "min-height": "250px",
};

const resize = {
    // resize: 'both'
};

const tools = [
    ["Bold", "Italic", "Underline"],
    ["Undo", "Redo"],
    ["Link", "Unlink"],
    ["AlignLeft", "AlignCenter", "AlignRight"],
    ["OrderedList", "UnorderedList", "Indent", "Outdent"],
];
</script>
