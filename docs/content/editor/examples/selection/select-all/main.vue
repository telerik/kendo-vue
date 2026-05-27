<template>
  <div>
    <Editor
      :tools="tools"
      :content-style="{ height: '320px' }"
      :default-content="content"
      ref="editorRef"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Editor, ProseMirror } from "@progress/kendo-vue-editor";
import content from "./content.js";

const { AllSelection } = ProseMirror;

const tools = [["Bold", "Italic", "Underline"], ["ViewHtml"]];
const editorRef = ref(null);

function setEditorTextSelection() {
    const view = editorRef.value.getView();
    if (!view) return;

    const selection = new AllSelection(view.state.doc);
    const transaction = view.state.tr;
    transaction.setSelection(selection);
    view.dispatch(transaction);
    view.focus();
}

onMounted(() => {
    setEditorTextSelection();
});
</script>
