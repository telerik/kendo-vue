<template>
  <div>
    <Editor
      :tools="tools"
      :content-style="{ height: '430px' }"
      :default-content="content"
      @blur="onBlur"
      @change="onChange"
      @execute="onExecute"
      @focus="onFocus"
      @loaded="onLoaded"
      :paste-html="onPaste"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Editor } from "@progress/kendo-vue-editor";
import Logger from "./Logger.vue";
import content from "./content";

const tools = [
    ["Bold", "Italic", "Underline"],
    ["Undo", "Redo"],
    ["Link", "Unlink"],
    ["AlignLeft", "AlignCenter", "AlignRight"],
    ["OrderedList", "UnorderedList", "Indent", "Outdent"],
];

const events = ref([]);

function onChange() {
    events.value.unshift("Change event triggered.");
}

function onBlur() {
    events.value.unshift("Blur event triggered.");
}

function onExecute() {
    events.value.unshift("Execute event triggered.");
}

function onFocus() {
    events.value.unshift("Focus event triggered.");
}

function onLoaded() {
    events.value.unshift("Loaded event triggered.");
}

function onPaste() {
    events.value.unshift("PasteHTML triggered.");
}
</script>
