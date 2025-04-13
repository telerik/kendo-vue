<template>
  <Editor
    :tools="tools"
    :content-style="{
      height: '325px',
    }"
    :default-content="content"
    :extend-view="extendView"
  />
</template>

<script>
import { ProseMirror, EditorUtils } from "@progress/kendo-vue-editor";
const { EditorState, EditorView } = ProseMirror;
const { imageResizing } = EditorUtils;

import { Editor } from "@progress/kendo-vue-editor";
import content from "./content-overview";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      tools: [
        "Bold",
        "Italic",
        "Link",
        "Unlink",
        "InsertImage",
        "FormatBlock",
        "Undo",
        "Redo",
        "OrderedList",
        "UnorderedList",
      ],
      content: content,
    };
  },
  methods: {
    extendView(event) {
      const state = event.viewProps.state;
      const plugins = [...state.plugins, imageResizing()];

      return new EditorView(
        {
          mount: event.dom,
        },
        {
          ...event.viewProps,
          state: EditorState.create({
            doc: state.doc,
            plugins,
          }),
        }
      );
    },
  },
};
</script>
