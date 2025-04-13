<template>
  <Editor
    :tools="tools"
    :content-style="{
      height: '400px',
    }"
    :default-content="content"
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
        "ForeColor",
        "BackColor",
        ["CleanFormatting"],
        ["AlignLeft", "AlignCenter", "AlignRight", "AlignJustify"],
        ["Indent", "Outdent"],
        ["OrderedList", "UnorderedList"],
        "FontSize",
        "FontName",
        "FormatBlock",
        ["SelectAll"],
        ["Undo", "Redo"],
        ["Link", "Unlink", "InsertImage", "ViewHtml"],
        ["InsertTable", "InsertFile"],
        ["Pdf", "Print"],
        ["AddRowBefore", "AddRowAfter", "AddColumnBefore", "AddColumnAfter"],
        ["DeleteRow", "DeleteColumn", "DeleteTable"],
        ["MergeCells", "SplitCell"],
      ],
      content: content,
    };
  },
};
</script>

