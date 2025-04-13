<template>
  <Editor
    :dir="'rtl'"
    :tools="tools"
    :default-content="content"
    :content-style="{
      height: '340px',
    }"
  />
</template>

<script>
import { Editor } from "@progress/kendo-vue-editor";
import content from "./content";

export default {
  components: {
    Editor,
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
