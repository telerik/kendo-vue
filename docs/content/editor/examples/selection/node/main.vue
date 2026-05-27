<template>
  <div>
    <KButton @click="onClick">Select second Node</KButton>
    <Editor
      :tools="tools"
      :content-style="{ height: '320px' }"
      :default-content="content"
      ref="editorRef"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Editor, ProseMirror } from "@progress/kendo-vue-editor";
import content from "./content.js";

const { NodeSelection } = ProseMirror;

const tools = [["Bold", "Italic", "Underline"], ["ViewHtml"]];

const editorRef = ref(null);

function selectLastNode(view) {
    const doc = view.state.doc;
    let nodePosition = 0;
    const nodeToSelect = doc.child(1);
    doc.nodesBetween(0, doc.content.size, (node, pos) => {
        if (node.eq(nodeToSelect)) {
            nodePosition = pos;
        }
        return false;
    });

    const selection = NodeSelection.create(doc, nodePosition);
    const transaction = view.state.tr;
    transaction.setSelection(selection);
    view.dispatch(transaction);
    view.focus();
}

function onClick() {
    const view = editorRef.value?.view;
    if (!view) return;

    selectLastNode(view);
}
</script>
