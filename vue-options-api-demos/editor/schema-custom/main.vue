<template>
  <Editor
    :tools="tools"
    :content-style="{
      height: '330px',
    }"
    :extend-view="extendView"
  />
</template>

<script>
import {
  Editor,
  EditorUtils,
  ProseMirror,
} from "@progress/kendo-vue-editor";
import mySchema from "./schema";
import content from "./content";
const { EditorView, EditorState } = ProseMirror;

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
    };
  },
  methods: {
    extendView(event) {
      const { viewProps } = event;
      const { plugins } = viewProps.state; // Create a new document using the schema.

      const doc = EditorUtils.createDocument(mySchema, content); // Return the custom EditorView object that will be used by Editor.

      return new EditorView(
        {
          mount: event.dom,
        },
        {
          ...event.viewProps,
          state: EditorState.create({
            doc: doc,
            plugins,
          }),
        }
      );
    },
  },
};
</script>
