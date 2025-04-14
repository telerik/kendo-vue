<template>
  <LocalizationProvider :language="'de'">
    <Editor
      :tools="tools"
      :default-content="content"
      :content-style="{
        height: '320px',
      }"
    />
  </LocalizationProvider>
</template>

<script>
import { loadMessages, LocalizationProvider } from "@progress/kendo-vue-intl";
import { Editor } from "@progress/kendo-vue-editor";
import { deMessages } from "./deMessages";
import content from "./content";

loadMessages(deMessages, "de");

export default {
  components: {
    Editor,
    LocalizationProvider,
  },
  data() {
    return {
      tools: [
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
      ],
      content: content,
    };
  },
};
</script>
