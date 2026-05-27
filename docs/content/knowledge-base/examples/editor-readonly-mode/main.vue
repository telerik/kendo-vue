<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '430px' }"
    :default-content="content"
  />
</template>

<script setup>
import { Editor } from '@progress/kendo-vue-editor';
import content from './content';

const tools = [
  ['Bold', 'Italic', 'Underline'],
  ['Undo', 'Redo'],
  ['Link', 'Unlink'],
  ['AlignLeft', 'AlignCenter', 'AlignRight'],
  ['OrderedList', 'UnorderedList', 'Indent', 'Outdent'],
];
</script>
<style>
.k-editor {
  pointer-events: none;
  opacity: 0.6;
}
</style>
