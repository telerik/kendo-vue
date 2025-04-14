<template>
  <Editor
    :resizable="true"
    :tools="tools"
    :default-content="content"
    :style="[{ height: '360px' }, constraints, resize]"
  />
</template>

<script>
import { Editor } from "@progress/kendo-vue-editor";
import content from "./content.js";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      constraints: {
        "max-height": "420px",
        "max-width": "750px",
        "min-width": "555px",
        "min-height": "250px",
      },

      // Could be 'both', 'horizontal', and 'vertical'. Defaults to 'both'.
      resize: {
        // resize: 'both'
      },
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
