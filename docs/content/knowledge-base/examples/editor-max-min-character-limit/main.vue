<template>
    <Editor :tools="tools" :content-style="{ height: '100px' }" @change="onChange" :value="value" />
    <Hint :id="'editorHint'"> {{ length }}/{{ maxLength }} </Hint>
</template>

<script setup>
import { ref } from 'vue';
import { Editor, EditorUtils, ProseMirror } from '@progress/kendo-vue-editor';
import { Hint } from '@progress/kendo-vue-labels';

const tools = [['Bold', 'Italic']];
const maxLength = 100;
const length = ref(21);
const value = ref(
    EditorUtils.createDocument(
        new ProseMirror.Schema({
            nodes: EditorUtils.nodes,
            marks: EditorUtils.marks,
        }),
        '<p>Editor sample content</p>'
    )
);

function onChange(event) {
    const textContent = event.value.textContent;
    if (textContent.length <= maxLength) {
        value.value = event.value;
        length.value = textContent.length;
    }
}
</script>
