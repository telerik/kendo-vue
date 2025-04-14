<template>
  <div>
    <k-button @click="toggleEditable">
      Set Read-Only to {{ editable }}
    </k-button>
    <br />
    <br />
    <Editor
      ref="editor"
      :tools="tools"
      :content-style="{
        height: '145px',
      }"
      :extend-view="extendView"
      :default-content="content"
    />
  </div>
</template>

<script>
import { Button } from "@progress/kendo-vue-buttons";
import { Editor, ProseMirror } from "@progress/kendo-vue-editor";
import content from "./content-basic";
const { EditorState, EditorView, Plugin, PluginKey } = ProseMirror;

export default {
  components: {
    Editor,
    "k-button": Button,
  },
  data() {
    return {
      editable: true,
      content: content,
      tools: [["Bold", "Italic", "Underline"]],
    };
  },
  methods: {
    extendView(event) {
      const state = event.viewProps.state;
      const plugins = [
        ...state.plugins,
        new Plugin({
          key: new PluginKey("readonly"),
          props: {
            editable: () => this.editable,
          },
          filterTransaction: (tr, _st) => this.editable || !tr.docChanged,
        }),
      ];

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
    toggleEditable() {
      this.editable = !this.editable;
    },
  },
};
</script>
