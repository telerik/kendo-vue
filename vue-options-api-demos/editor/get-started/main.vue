<template>
  <Editor
    :tools="tools"
    :content-style="{
      height: '430px',
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
        ["Bold", "Italic", "Underline"],
        ["Undo", "Redo"],
        ["Link", "Unlink"],
        ["AlignLeft", "AlignCenter", "AlignRight"],
        ["OrderedList", "UnorderedList", "Indent", "Outdent"],
      ],
      content: content,
    };
  },
};
</script>

