<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '100px' }"
    @change="onChange"
    :value="value"
  />
</template>

<script setup>
import { ref } from "vue";
import { Editor, EditorUtils, ProseMirror } from "@progress/kendo-vue-editor";

const tools = [["Bold", "Italic"]];
const value = ref(
    EditorUtils.createDocument(
        new ProseMirror.Schema({
            nodes: EditorUtils.nodes,
            marks: EditorUtils.marks,
        }),
        "<p>Editor sample content</p>"
    )
);

function onChange(event) {
    value.value = event.value;
}
</script>
