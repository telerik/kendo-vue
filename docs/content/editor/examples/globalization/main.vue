<template>
  <LocalizationProvider :language="'de'">
    <Editor
      :tools="tools"
      :default-content="content"
      :content-style="{ height: '320px' }"
    />
  </LocalizationProvider>
</template>

<script setup>
import { Editor } from "@progress/kendo-vue-editor";
import { loadMessages, LocalizationProvider } from "@progress/kendo-vue-intl";
import { deMessages } from "./deMessages";
import content from "./content";

loadMessages(deMessages, "de");

const tools = [
    ["Bold", "Italic", "Underline", "Strikethrough"],
    ["Subscript", "Superscript"],
    ["Undo", "Redo"],
    ["Link", "Unlink", "InsertImage"],
    ["AlignLeft", "AlignCenter", "AlignRight"],
    ["OrderedList", "UnorderedList", "Indent", "Outdent"],
    "ViewHtml",
    "FontSize",
    "FontName",
    "FormatBlock",
];
</script>
