<template>
  <div>
    <Button @click="onClick">Select second Node</Button>
    <Editor
      :tools="tools"
      :content-style="{
        height: '320px',
      }"
      :default-content="content"
      ref="editorRef"
    />
  </div>
</template>

<script>
import { Button } from "@progress/kendo-vue-buttons";

import { Editor, EditorUtils, ProseMirror } from "@progress/kendo-vue-editor";
const { NodeSelection } = ProseMirror;
import content from "./content.js";

const selectLastNode = (view) => {
  const doc = view.state.doc;
  let nodePosition = 0;
  const nodeToSelect = doc.child(1);
  doc.nodesBetween(0, doc.content.size, (node, pos, _parent, _index) => {
    if (node.eq(nodeToSelect)) {
      nodePosition = pos;
    }

    return false; // return false to traverse only root nodes
  });
  const selection = NodeSelection.create(doc, nodePosition); // state.tr - Starts a transaction from this state.

  const transaction = view.state.tr;
  transaction.setSelection(selection);
  view.dispatch(transaction);
  view.focus();
};

export default {
  components: {
    Editor,
    Button,
  },
  data() {
    return {
      tools: [["Bold", "Italic", "Underline"], ["ViewHtml"]],
      content: content,
    };
  },
  methods: {
    onClick() {
      const view = this.$refs.editorRef && this.$refs.editorRef.view;

      if (!view) {
        return;
      }
      selectLastNode(view);
    },
  },
};
</script>
